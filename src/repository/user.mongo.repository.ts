import { UserModel } from './user.mongo.model.js';
import createDebug from 'debug';
import { User } from '../entities/user.js';
import { Repo } from './repo.js';
import { HttpError } from '../types/http.error.js';

// TEMP import { HttpError } from '../types/http.error.js';
const debug = createDebug('W6:UserRepo');

export class UserRepo implements Repo<User> {
  constructor() {
    debug('Instantiated', UserModel);
  }

  async query(): Promise<User[]> {
    const aData = await UserModel.find().exec();
    return aData;
  }

  async queryById(id: string): Promise<User> {
    const result = await UserModel.findById(id).exec();
    if (result === null)
      throw new HttpError(404, 'Not found', 'Bad id for the query');
    return result;
  }

  async search({
    key,
    value,
  }: {
    key: string;
    value: unknown;
  }): Promise<User[]> {
    const result = await UserModel.find({ [key]: value }).exec();
    return result;
  }

  async create(data: Omit<User, 'id'>): Promise<User> {
    const newUser = await UserModel.create(data);
    return newUser;
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    const newUser = await UserModel.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();
    if (newUser === null)
      throw new HttpError(404, 'Not found', 'Bad id for the update');
    return newUser;
  }

  async delete(id: string): Promise<void> {
    const result = await UserModel.findByIdAndDelete(id).exec();
    if (result === null)
      throw new HttpError(404, 'Not found', 'Bad id for the delete');
  }
}
