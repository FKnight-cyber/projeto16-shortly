import connection from "../dbStrategy/postgres.js";

async function newUrl(url,shortUrl,id){
    return connection.query(`
    INSERT INTO urls (url,"shortUrl","userId")
    VALUES ($1,$2,$3)`,[url,shortUrl,id]);
}

async function getUrlById(id){
    return connection.query(`
    SELECT * FROM urls u
    WHERE u.id = $1`,[id]);
}

async function getUrlByCode(shortUrl){
    return connection.query(`
    SELECT * FROM urls u
    WHERE "shortUrl" = $1`,[shortUrl])
}

async function updateUrl(shortUrl){
    return connection.query(`
    UPDATE urls
    SET "visitCount" = "visitCount" + 1
    WHERE "shortUrl" = $1`,[shortUrl])
}

async function deleteUrl(id){
    return connection.query(`
    DELETE FROM urls WHERE id = $1`,[id]);
}

export const urlRepository = {
    newUrl,
    getUrlById,
    getUrlByCode,
    updateUrl,
    deleteUrl
}