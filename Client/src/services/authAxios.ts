// import { store } from "@/store/store";
import axios from "axios";

export const authAxios = axios.create({
  withCredentials: false,
});

export const paymentAuthAxios = axios.create({
  withCredentials: false,
});

// Attach a request interceptor to inject the token dynamically
// authAxios.interceptors.request.use(
//   (config) => {
//     const state = store.getState(); // Get the latest state
//     const token = state.user.currentUser?.token; // Get the token

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`; // Attach token
//     }

//     return config;
//   },
//   (error) => Promise.reject(error) // Handle request error
// );

