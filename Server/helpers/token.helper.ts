import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { AppError } from "../middlewares/errorHandler";
import { IAuthUser } from "../types/auth.types";
import crypto from "crypto";
import { TOKEN } from "../enums/token.enum";


export class tokenHelper {
   static async getSecretKey(): Promise<Buffer> {
    return crypto.scryptSync(env.MESSAGE_SECRET, 'salt', 32);
   }
   
  static async encryptMessage(message: string): Promise<{ iv: string; content: string }> {
    const algorithm = TOKEN.HASH_ALGORITHM;
    const iv = crypto.randomBytes(16);
    const secretKey= await tokenHelper.getSecretKey();
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    
    const encrypted = Buffer.concat([cipher.update(message), cipher.final()]);
    return {
      iv: iv.toString('hex'),
      content: encrypted.toString('hex')
    };
  }

  static async decryptMessage(encryptedMessage: { iv: string; content: string }): Promise<string> {
    const algorithm = TOKEN.HASH_ALGORITHM;
    const iv = Buffer.from(encryptedMessage.iv, 'hex');
    const secretKey= await tokenHelper.getSecretKey();
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encryptedMessage.content, 'hex')),
      decipher.final()
    ]);
    
    return decrypted.toString();
  }

  static generateToken(payload: object, expiresIn: string = "7d"): string {
    //@ts-ignore
    return jwt.sign(payload, env.JWT_SECRET as string, { expiresIn });
  }

  static verifyToken(token: string): boolean | IAuthUser {
    try {
      const decoded = jwt.verify(token, env.JWT_SECRET);
      if (typeof decoded === "object" && decoded !== null) {
        return decoded as IAuthUser;
      }
      throw new AppError("Invalid token payload", 401);
    } catch (error) {
      console.log(error);
      throw new AppError("Invalid or expired token", 401);
    }
  }
}
