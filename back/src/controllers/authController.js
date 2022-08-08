import connection from '../dbStrategy/postgres.js';
import bcrypt from 'bcrypt';
import {v4} from 'uuid';
import { stripHtml } from "string-strip-html";
import { userRepository } from "../repositories/userRepository.js";

export async function signUp(req,res){
    const { name,email,password } = req.body;
    const passwordHash = bcrypt.hashSync(password,10);

    const cleansedName = stripHtml(name).result;
    const cleansedEmail = stripHtml(email).result;

    try {   
        await userRepository.newUser(cleansedName.trim(),cleansedEmail.trim(),passwordHash);
        res.sendStatus(201);
    } catch (error) {
        if(error.constraint === "users_email_key") return res.sendStatus(409);
        res.sendStatus(500);
    }
}

export async function signIn(req,res){
    const { email,password } = req.body;
    try {   
        const { rows:checkUser } = await userRepository.getUserByEmail(email);

        if(checkUser.length > 0 && bcrypt.compareSync(password, checkUser[0].password)){
            const token = v4();

            await connection.query(`
            INSERT INTO sessions ("userId",token)
            VALUES ($1,$2)`,[checkUser[0].id,token]);

            return res.status(200).send(token);
        }else{
            return res.sendStatus(401)
        }
    }catch (error) {
        res.sendStatus(500);
    }
}