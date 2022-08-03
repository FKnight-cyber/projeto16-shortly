import connection from "../dbStrategy/postgres.js";
import { nanoid } from 'nanoid';

export async function shortenUrl(req,res){
    const { url } = req.body;
    const { token } = res.locals;
    try {
        const { rows:session } = await connection.query(`
        SELECT * FROM sessions s
        WHERE s.token = $1`,[token]);

        if(!session.length > 0) return res.sendStatus(401);

        const shortenedUrl = nanoid(8);

        await connection.query(`
        INSERT INTO urls (url,"shortUrl","userId")
        VALUES ($1,$2,$3)`,[url,shortenedUrl,session[0].userId]);

        const body = {
            shortUrl:shortenedUrl
        }

        res.status(201).send(body);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}

export async function getUrlById(req,res){
    const { id } = req.params;
    try {
        const { rows:url } = await connection.query(`
        SELECT * FROM urls u
        WHERE u.id = $1`,[id]);
        
        if(!url.length > 0) return res.sendStatus(404)

        const body = {
            id: url[0].id,
            url: url[0].url,
            shortUrl: url[0].shortUrl
        };

        res.status(200).send(body);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function goToUrl(req,res){
    const { shortUrl } = req.params;
    try {
        const { rows:url } = await connection.query(`
        SELECT * FROM urls u
        WHERE "shortUrl" = $1`,[shortUrl]);

        if(!url.length > 0) return res.sendStatus(404);

        await connection.query(`
        UPDATE urls
        SET "visitCount" = "visitCount" + 1
        WHERE "shortUrl" = $1`,[shortUrl]);

        res.status(200).redirect(url[0].url);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function deleteUrlById(req,res){
    const { token } = res.locals;
    const { id } = req.params;
    try {
        const { rows:session } = await connection.query(`
        SELECT * FROM sessions s
        WHERE s.token = $1`,[token]);

        if(!session.length > 0) return res.sendStatus(401);

        const { rows:url } = await connection.query(`
        SELECT * FROM urls u
        WHERE u.id = $1`,[id]);

        if(!url.length > 0) return res.sendStatus(404);
        
        if(url[0].userId !== session[0].userId) return res.sendStatus(401);

        await connection.query(`
        DELETE FROM urls WHERE id = $1`,[id])

        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}