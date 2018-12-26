// Core
import { object, string, number, boolean } from 'yup';

export const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

export const schema = object().shape({
    name:  string().required(),
    promo: number(),
    email: string()
        .email()
        .required(),
    password: string().required(),
    remember: boolean(),
});
