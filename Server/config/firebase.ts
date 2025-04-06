import admin from "firebase-admin";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const serviceAccount = require(path.join(__dirname, "../serviceAccount.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
