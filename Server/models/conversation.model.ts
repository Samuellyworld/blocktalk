import { IMessage } from "./message.model";

export interface IConversation {
    id?: string;
    participants: [string, string]; // or senderId and receiverId separately
    messages: IMessage[] | null;
    payment_invoice: string;
    payment_status: boolean;
    withdrawal_invoice: string;
    receiver_amount: number;
    withdrawal_status: boolean;
    last_updated: number;
  }