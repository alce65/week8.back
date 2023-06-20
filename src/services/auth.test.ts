import { AuthServices, PayloadToken } from './auth';
import jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken');

describe('Given AuthServices class', () => {
  describe('When I use createJWT', () => {
    test('Then JWT sign should been called', () => {
      const payload = {} as PayloadToken;
      AuthServices.createJWT(payload);
      expect(jwt.sign).toHaveBeenCalled();
    });
  });
});
