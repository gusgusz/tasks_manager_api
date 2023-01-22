import { Response, Request } from 'express';
import { NewUser } from '../types/userTypes.js';
import { userSchema } from '../models/userModels.js';
import { connectionDb } from '../database/db.js';
import bcrypt from 'bcrypt';


export async function newUser(req: Request, res: Response) {
    const validate = userSchema.validate(req.body);
    if (validate.error) {
        res.status(400).json(validate.error.details[0].message);
        return;
    }
    const { name, email, password } : NewUser = req.body;
    const createdAt : Date = new Date();
    const hashPassword : string = bcrypt.hashSync(password, 10);

    try{
       await connectionDb.query<NewUser>(`INSERT INTO users (name, email, password, "createdAt") VALUES ($1, $2, $3, $4);`, [name, email, hashPassword, createdAt]);
         res.status(201).json('User created');
         return;
    }catch(err){ 
        if(err.message.includes("users_email_key")){
            res.status(409).json('Email already exists');
            return;
        }
        res.sendStatus(500);
        return;
    }


    };