const ENGINE_ENV = import.meta.env.VITE_APP_ENGINE_ENV;
const REACT_APP_DEV_API_URL = import.meta.env.VITE_APP_DEV_API_URL;
const REACT_APP_API_URL = import.meta.env.VITE_APP_API_URL;
const REACT_APP_DEV_CLIENT_URL = import.meta.env.VITE_APP_DEV_CLIENT_URL;
const REACT_APP_CLIENT_URL = import.meta.env.VITE_APP_CLIENT_URL;

let host = "";

if (ENGINE_ENV === "production") {
  host = REACT_APP_API_URL;
} else {
  host = REACT_APP_DEV_API_URL;
}

let client = "";
if (ENGINE_ENV === "production") {
  client = REACT_APP_CLIENT_URL;
} else {
  client = REACT_APP_DEV_CLIENT_URL;
}

export const hostRoute = host;

export const clientRoute = client;
