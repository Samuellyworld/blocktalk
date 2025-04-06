// @ts-nocheck
export interface IMessage {
    id?: string;
    sender: string;
    receiver: string;
    payment_invoice:string;
    payment_status:boolean;
    withdrawal_invoice:string;
    withdrawal_status:boolean;
    messages: EachMessage[];
  }

export type EachMessage={
    sender:string,
    message:string,
}
 