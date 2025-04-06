import { toast, ToastPromiseParams, ToastContent, ToastOptions, Slide } from "react-toastify";

export const successToast = (message: ToastContent, dict: ToastOptions = {}) => {
  toast.success(message, {
    position: "bottom-left",
    autoClose: 3000,
    ...dict
  });
};

export const errorToast = (message: ToastContent, dict: ToastOptions = {}) => {
  toast.error(message, {
    position: "bottom-left",
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    autoClose: 4000,
    ...dict
  });
};

export const infoToast = (message: ToastContent, dict: ToastOptions = {}) => {
  toast.info(message, {
    position: "bottom-left",
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    autoClose: 4000,
    ...dict
  });
};

export const promiseToast = (
  promise: Promise<any>,
  promiseParams: ToastPromiseParams,
  opts: ToastOptions = {}
) => {
  toast.promise(promise, promiseParams, {
    position: "bottom-left",
    transition: Slide,
    autoClose: 4000,
    ...opts
  });
};