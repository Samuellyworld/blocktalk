import QRCode from 'qrcode';
import { bech32 } from 'bech32';
import crypto from 'crypto';
import fs from 'fs/promises';
import secp256k1 from 'secp256k1';
import { LIGHTNING_ENUM } from '../enums/lightning.enum';


export class LightningService {

    static async loadAuthData() {
         try {
               const data = await fs.readFile(LIGHTNING_ENUM.AUTH_DATA_FILE, 'utf8');
               return JSON.parse(data);
           } catch (error) {
               throw new error("Error Fetching Auth Data");
           }
    }

    static async saveAuthData(data:any) {
       try {
              await fs.writeFile(LIGHTNING_ENUM.AUTH_DATA_FILE, JSON.stringify(data, null, 2));
          } catch (error) {
              console.error('[SAVE-AUTH-DATA] Error:', error.message);
          }
   }
    static async encodeLNURL(url:string){
         try {
                const words = bech32.toWords(Buffer.from(url, 'utf8'));
                return bech32.encode('lnurl', words, 1023);
            } catch (error) {
                console.error('[LNURL-ENCODE] Error:', error.message);
                throw new Error('Failed to encode LNURL');
            }

    } 


}
