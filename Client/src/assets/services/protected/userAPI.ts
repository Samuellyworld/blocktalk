import * as userRoutes from "../apiRoutes/userRoutes";
import { protectedGet, protectedPost } from "../apiHelper";

export const userAPI = {
  getAllUsers: async () => {
    return await protectedGet(userRoutes.fetchAllUsers) as unknown as any
  },
  createUser: async ({
   lightning_user_id,
    username,
    amount,
  }: {
    username: string;
    amount: number;
    lightning_user_id: string;
  }) => {
    return await protectedPost(userRoutes.createUser, {
      lightning_user_id,
      username,
      amount,
    }) as unknown as {
      id: string;
      username: string;
      amount: number;
      lightning_user_id: string;
      status : number;
    }
  },
  getUserByUserId: async (lightning_user_id: string) => {
    return await protectedGet(`${userRoutes.getUserByUserId}/${lightning_user_id}`) as unknown as {
      id: string;
      username: string;
      amount: number;
      lightning_user_id: string;
      status : number;
  }
  }
};
  