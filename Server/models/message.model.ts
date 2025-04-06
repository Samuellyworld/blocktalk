export interface IMessage {
  id?: string; // Optional, for Firestore document reference
  sender: string; // Only sender is needed
  message: string;
  timestamp: number;
}

 