import * as MessageRoutes from '../apiRoutes/messageRoutes';

import { protectedGet, protectedPost } from "../apiHelper";


export const messageAPI = {
    createMessage : async (body: any) => {
        return await protectedPost(MessageRoutes.createMessage, body) as any
},
 getMessages : async (sender : any, receiver: any) => {
      return await protectedGet(`${MessageRoutes.getMessages}/${sender}/${receiver}`) as any
 },
 updatePayment : async (sender : any, receiver: any) => {
        return await protectedGet(`${MessageRoutes.updatePayment}/${sender}/${receiver}`) as any
    },
updateWithdrawal : async (sender : any, receiver: any) => {
        return await protectedGet(`${MessageRoutes.updateWithdrawal}/${sender}/${receiver}`) as any
    }
}