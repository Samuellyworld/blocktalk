import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || "5000",
  JWT_SECRET: process.env.JWT_SECRET,
  MESSAGE_SECRET: process.env.MESSAGE_SECRET,
  LNBITS_URL:process.env.LNBITS_URL,
  LNBITS_API_KEY:process.env.LNBITS_API_KEY,
  WALLET_ID:process.env.WALLET_ID,
  ADMIN_API_KEY : process.env.ADMIN_API_KEY,
  INVOICE_API_KEY : process.env.INVOICE_API_KEY
}
