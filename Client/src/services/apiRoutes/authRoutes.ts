import { hostRoute } from "../routesHelper";

const authRoute = `${hostRoute}/auth`;

export const verify = `${authRoute}/verify`;

export const createAuth = `${authRoute}/createAuth`;

export const authStatus = `${authRoute}/authStatus`;
