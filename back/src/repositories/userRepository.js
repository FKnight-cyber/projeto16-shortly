import connection from "../dbStrategy/postgres.js";

async function getUserById(id) {
	return connection.query('SELECT * FROM users WHERE id=$1', [id]);
}

async function getUserByEmail(email) {
	return connection.query('SELECT * FROM users WHERE email=$1', [email]);
}

async function newUser(name,email,password) {
	return connection.query(`
    INSERT INTO users (name,email,password) 
    VALUES ($1,$2,$3)`,[name,email,password]);
}

async function userInfo(id){
    return connection.query(`
    SELECT u.id,u.url,u."shortUrl",u."visitCount" FROM urls u
    WHERE u."userId" = $1`,[id]);
}

export const userRepository = {
	getUserById,
    getUserByEmail,
    newUser,
    userInfo
}