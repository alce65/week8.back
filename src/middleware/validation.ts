import createDebug from 'debug';
import { validate } from 'express-validation';
import { userSchema } from '../entities/user.js';
const debug = createDebug('W6:ErrorMiddleware');

export class ValidationMiddleware {
  constructor() {
    debug('Instantiate');
  }

  registerValidation() {
    return validate(
      {
        body: userSchema,
      },
      {
        statusCode: 406,
      },
      { abortEarly: false }
    );
  }
}
