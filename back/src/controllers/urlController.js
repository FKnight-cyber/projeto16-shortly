import connection from "../dbStrategy/postgres.js";
import { urlRepository } from "../repositories/urlRepository.js";
import { nanoid } from 'nanoid';
import { stripHtml } from "string-strip-html";

export async function shortenUrl(req,res){
    const { url } = req.body;
    const { token } = res.locals;

    const cleansedUrl = stripHtml(url).result;

    try {
        const { rows:session } = await connection.query(`
        SELECT * FROM sessions s
        WHERE s.token = $1`,[token]);

        if(!session.length > 0) return res.sendStatus(401);

        const shortenedUrl = nanoid(8);

        await urlRepository.newUrl(cleansedUrl,shortenedUrl,session[0].userId);

        const body = {
            shortUrl:shortenedUrl
        }

        res.status(201).send(body);
    } catch (error) {
        if(error.constraint === 'proper_url') return res.status(422).send({message:'invalid URL format'});
        res.sendStatus(500);
    }
}

export async function getUrlById(req,res){
    const { id } = req.params;
    if(isNaN(parseInt(id))) return res.sendStatus(422);
    try {
        const { rows:url } = await urlRepository.getUrlById(id);
        
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
        const { rows:url } = await urlRepository.getUrlByCode(stripHtml(shortUrl).result);

        if(!url.length > 0) return res.sendStatus(404);

        await urlRepository.updateUrl(shortUrl);

        res.redirect(200,url[0].url);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function deleteUrlById(req,res){
    const { token } = res.locals;
    const { id } = req.params;
    if(isNaN(parseInt(id))) return res.sendStatus(422);
    try {
        const { rows:session } = await connection.query(`
        SELECT * FROM sessions s
        WHERE s.token = $1`,[token]);

        if(!session.length > 0) return res.sendStatus(401);

        const { rows:url } = await urlRepository.getUrlById(id);

        if(!url.length > 0) return res.sendStatus(404);
        
        if(url[0].userId !== session[0].userId) return res.sendStatus(401);

        await urlRepository.deleteUrl(id);

        res.sendStatus(204);
    } catch (error) {
        res.sendStatus(500);
    }
}