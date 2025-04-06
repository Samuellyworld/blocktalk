import { db } from "../config/firebase";
import { IUser } from "../models/user.model";

export class UserService {
    private static collection = db.collection("users");

    static async createUser(user: IUser): Promise<string> {
        const { lightning_user_id, username, amount } = user;

        const querySnapshot = await this.collection
            .where("lightning_user_id", "==", lightning_user_id)
            .get();

        if (!querySnapshot.empty) {
            // User exists, update the record
            const existingUserDoc = querySnapshot.docs[0];
            await existingUserDoc.ref.update({ username, amount });
            return existingUserDoc.id;
        }

        // User does not exist, create a new one
        const newUserRef = this.collection.doc();
        await newUserRef.set({ username, amount, lightning_user_id });

        return newUserRef.id;
    }

    static async getUsers(): Promise<IUser[]> {
        const snapshot = await this.collection.get();
        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as IUser[];
    }

    static async getUserByLightningId(lightning_user_id: string): Promise<IUser | null> {
        const querySnapshot = await this.collection
            .where("lightning_user_id", "==", lightning_user_id)
            .get();

        if (querySnapshot.empty) return null;
        const userDoc = querySnapshot.docs[0];
        return { id: userDoc.id, ...userDoc.data() } as IUser;
    }

    static async deleteUserById(id: string): Promise<void> {
        await this.collection.doc(id).delete();
    }
}
