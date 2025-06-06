import { authAxios, paymentAuthAxios } from "./authAxios";
import { clientRoute } from "./routesHelper";

// @ts-ignore
let clientURL: Location | string = window.location;

export const protectedPost = async (route: string, payload: any) => {
  return authAxios
    .post(route, payload)
    .then((res: { data: Array<string> }) => {
      return res.data;
    })
    .catch((error: { response: { status: number } }) => {
      if (error.response && error.response.status === 401) {
        clientURL = `${clientRoute}/dashboard`;
      } else {
        return error;
      }
    });
};
export const protectedPaymentPost = async (route: string, payload: any) => {
  return paymentAuthAxios
    .post(route, payload)
    .then((res: { data: Array<string> }) => {
      return res.data;
    })
    .catch((error: { response: { status: number } }) => {
      if (error.response && error.response.status === 401) {
        clientURL = `${clientRoute}/dashboard`;
      } else {
        return error;
      }
    });
};

export const protectedGet = async (route: string, payload?: any) => {
  return authAxios
    .get(route, payload) // Pass params here
    .then((res: { data: Array<string> }) => res.data)
    .catch((error: { response: { status: number } }) => {
      if (error.response?.status === 401) {
        clientURL = `${clientRoute}/dashboard`;
      } else {
        return error;
      }
    });
};
export const protectedPaymentGet = async (route: string, payload?: any) => {
  return paymentAuthAxios
    .get(route, payload) // Pass params here
    .then((res: { data: Array<string> }) => res.data)
    .catch((error: { response: { status: number } }) => {
      if (error.response?.status === 401) {
        clientURL = `${clientRoute}/dashboard`;
      } else {
        return error;
      }
    });
};

export const protectedPut = async (route: string, payload: string) => {
  return authAxios
    .put(route, payload)
    .then((res: { data: Array<string> }) => {
      return res.data;
    })
    .catch((error: { response: { status: number } }) => {
      if (error.response && error.response.status === 401) {
        clientURL = `${clientRoute}/dashboard`;
      } else {
        return error;
      }
    });
};

export const protectedDelete = async (route: string, params: any) => {
  console.log(params);
  return authAxios
    .delete(route, { params }) // Use `params` instead of `data`
    .then((res) => res.data)
    .catch((error) => {
      if (error.response?.status === 401) {
        clientURL = `${clientRoute}/dashboard`;
      } else {
        throw error; // Ensure proper error handling
      }
    });
};

export const UnProtectedPost = async (route: string, payload: any) => {
  return authAxios
    .post(route, payload)
    .then((res: { data: Array<string> }) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const UnProtectedGet = async (route: string) => {
  return authAxios
    .get(route)
    .then((res: { data: Array<string> }) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const UnProtectedPut = async (route: string, payload: string) => {
  return authAxios
    .put(route, payload)
    .then((res: { data: Array<string> }) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const UnProtectedDelete = async (route: string) => {
  return authAxios
    .delete(route)
    .then((res: { data: any }) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};
