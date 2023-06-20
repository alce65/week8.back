import * as dotenv from 'dotenv';
dotenv.config();

export const user = process.env.DB_USER;
export const passwd = process.env.DB_PASSWORD;
export const db = process.env.DB_NAME;
export const secret = process.env.JWT_SECRET;
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'week8-f9ed3.firebaseapp.com',
  projectId: 'week8-f9ed3',
  storageBucket: 'week8-f9ed3.appspot.com',
  messagingSenderId: '726435662588',
  appId: '1:726435662588:web:ab24d6a6fad2c302bc6579',
};
