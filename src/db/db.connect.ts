import mongoose from 'mongoose';
import { user, passwd, db } from '../config.js';

export const dbConnect = () => {
  const uri = `mongodb+srv://${user}:${passwd}@cluster0.p2bwofa.mongodb.net/${db}?retryWrites=true&w=majority`;
  return mongoose.connect(uri);
};
