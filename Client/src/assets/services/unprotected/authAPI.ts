import * as authRoute from "../apiRoutes/authRoutes";
import { UnProtectedGet} from "../apiHelper";


export const AuthAPI = {
  createAuth: async () => {
    const response =  await UnProtectedGet(authRoute.createAuth);
    return response as unknown as {
      qr_code: string;
      socketId: string;
      status: number;
    }
  },

  checkAuthStatus: async (k1: string) => {
    const response = await UnProtectedGet(`${authRoute.authStatus}?k1=${k1}`);
    console.log(response, "response");
    return response as unknown as {
      authenticated: boolean;
      publicKey: string;
      status: number;
    }
  },
};
