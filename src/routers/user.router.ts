import { Router as createRouter } from 'express';
import createDebug from 'debug';
import { User } from '../entities/user.js';
import { UserRepo } from '../repository/user.mongo.repository.js';
import { UserController } from '../controllers/user.controller.js';
import { Repo } from '../repository/repo.js';
import { FileMiddleware } from '../middleware/files.js';
import { ValidationMiddleware } from '../middleware/validation.js';
const debug = createDebug('W6:UserRouter');

debug('Executed');
const repo: Repo<User> = new UserRepo() as Repo<User>;
const controller = new UserController(repo);

const fileStore = new FileMiddleware();
const validation = new ValidationMiddleware();
export const userRouter = createRouter();

userRouter.get('/', controller.getAll.bind(controller));
userRouter.post(
  '/register',
  fileStore.singleFileStore('avatar').bind(fileStore),
  validation.registerValidation().bind(validation),
  fileStore.optimization.bind(fileStore),
  fileStore.saveDataImage.bind(fileStore),
  controller.register.bind(controller)
);
userRouter.patch('/login', controller.login.bind(controller));
