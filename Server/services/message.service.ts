import { db } from "../config/firebase";
import { IMessage } from "../models/message.model";
import { IUser } from "../models/user.model";
import { env } from "../config/env";
import { IConversation } from "../models/conversation.model"

const { LNBITS_URL, ADMIN_API_KEY, INVOICE_API_KEY } = env;

export class MessageService {
    private static conversationCollection = db.collection("conversations");
    private static userCollection = db.collection("users");

    static async createMessage(sender: string, receiver: string, message: IMessage): Promise<
        IConversation> {
        try {
            const participants = [sender, receiver].sort();
            const conversationId = participants.join("_");

            const receiverSnapshot = await this.userCollection
                .where("lightning_user_id", "==", receiver)
                .get();

            if (receiverSnapshot.empty) {
                throw new Error("Receiver not found");
            }

            const receiverData = receiverSnapshot.docs[0].data() as IUser;
            const receiverAmount = receiverData.amount;

            const payment_invoice =  await this.createLightningInvoice(receiverAmount);
            const withdrawal_invoice = await this.createWithdrawalLink(receiverAmount);

            const conversationRef = this.conversationCollection.doc(conversationId);
            const conversationDoc = await conversationRef.get();
            console.log("Conversation ID:", conversationId);

            if (conversationDoc.exists) {
                console.log("Conversation already exists");
                // if(message && )
                console.log("Message:", message);
                if(message !== null) {
                    await conversationRef.update({
                        messages: [...conversationDoc.data()?.messages, message],
                        payment_invoice : conversationDoc.data()?.payment_invoice,
                        payment_status: conversationDoc.data()?.payment_status,
                        withdrawal_invoice : conversationDoc.data()?.withdrawal_invoice,
                        withdrawal_status:  conversationDoc.data()?.withdrawal_status,
                        receiver_amount: receiverAmount,
                        last_updated: Date.now(),
                    });
                }

                const updatedConversationDoc = await conversationRef.get();
                return updatedConversationDoc.data() as IConversation;

            }

            const newConversation: IConversation = {
                participants: [sender, receiver],
                messages:  [],
                payment_invoice,
                payment_status: false,
                withdrawal_invoice,
                withdrawal_status: false,
                receiver_amount: receiverAmount,
                last_updated: Date.now(),
            };

            await conversationRef.set(newConversation);
            const updatedConversationDoc = await conversationRef.get();
            console.log(updatedConversationDoc.data());
             return updatedConversationDoc.data() as IConversation;
        } catch (error) {
            console.error("Error creating message:", error);
            throw new Error("Failed to create message");
        }
    }

    static async createLightningInvoice(amount: number): Promise<string> {
        try {
            const response = await fetch(`${LNBITS_URL}/api/v1/payments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": INVOICE_API_KEY,
                },
                body: JSON.stringify({
                    out: false,
                    amount,
                    memo: "Payment for messages",
                }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Failed to create invoice");
            return data.payment_request;
        } catch (error) {
            console.error("Error creating Lightning invoice:", error);
            throw new Error("Failed to create Lightning invoice");
        }
    }

    static async createWithdrawalLink(amount: number): Promise<string> {
        try {
            const feeAdjusted = amount - amount * 0.2;
            const response = await fetch(`${LNBITS_URL}/withdraw/api/v1/links`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": ADMIN_API_KEY,
                },
                body: JSON.stringify({
                    title: "Payout for messages",
                    min_withdrawable: feeAdjusted,
                    max_withdrawable: feeAdjusted,
                    uses: 1,
                    wait_time: 86400,
                    is_unique: true,
                    webhook_url: "",
                }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Failed to create withdrawal link");
            return data.lnurl;
        } catch (error) {
            console.error("Error creating withdrawal link:", error);
            throw new Error("Failed to create withdrawal link");
        }
    }

    static async getConversation(sender: string, receiver: string): Promise<IConversation | null> {
        try {
            const conversationId = [sender, receiver].sort().join("_");
            const conversationDoc = await this.conversationCollection.doc(conversationId).get();
            if (!conversationDoc.exists) return null;
            return { id: conversationDoc.id, ...conversationDoc.data() } as IConversation;
        } catch (error) {
            console.error("Error retrieving conversation:", error);
            throw new Error("Failed to retrieve conversation");
        }
    }

    static async updatePayment(sender: string, receiver: string): Promise<IConversation | null> {
        try {
            const conversationId = [sender, receiver].sort().join("_");
            const conversationDoc = await this.conversationCollection.doc(conversationId).get();
            const conversationRef = this.conversationCollection.doc(conversationId);
            if (!conversationDoc.exists) return null;
            await conversationRef.update({
                payment_status:true,
            })
            const updatedConversationDoc = await conversationRef.get();
            return updatedConversationDoc.data() as IConversation;

        } catch (error) {
            console.error("Error retrieving conversation:", error);
            throw new Error("Failed to retrieve conversation");
        }
    }

    static async updateWithdrawal(sender: string, receiver: string): Promise<IConversation | null> {
        try {
            const conversationId = [sender, receiver].sort().join("_");
            const conversationDoc = await this.conversationCollection.doc(conversationId).get();
            const conversationRef = this.conversationCollection.doc(conversationId);
            if (!conversationDoc.exists) return null;
            await conversationRef.update({
                withdrawal_status:true,
            })
            const updatedConversationDoc = await conversationRef.get();
            return updatedConversationDoc.data() as IConversation;

        } catch (error) {
            console.error("Error retrieving conversation:", error);
            throw new Error("Failed to retrieve conversation");
        }
    }
}
