import joi from 'joi';
import { NewUser } from '../types/userTypes';

export const userSchema = joi.object<NewUser>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    createdAt: joi.date().default(new Date())
});