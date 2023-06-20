import joi from 'joi';

export type Avatar = {
  urlOriginal: string;
  url: string;
  mimetype: string;
  size: number;
};

export type User = {
  id: string;
  userName: string;
  email: string;
  passwd: string;
  avatar: Avatar;
};

export type UserLogin = {
  user: string; // Equal to userName or email
  passwd: string;
};

export const userSchema = joi.object<User>({
  userName: joi.string().required(),
  email: joi.string().email().required().messages({
    'string.base': `"email" debe ser tipo 'texto'`,
    'string.email': `El "email"  no es válido`,
    'string.empty': `El "email" no puede faltar`,
  }),
  passwd: joi
    .string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .required(),
});
