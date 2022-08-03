import connection from "../dbStrategy/postgres.js";

export async function getUserInfo(req,res){
    const { token } = res.locals;
    try {
        const { rows:session } = await connection.query(`
        SELECT s.*,users.name FROM sessions s
        JOIN users ON users.id = s."userId"
        WHERE s.token = $1`,[token]);

        if(!session.length > 0) return res.sendStatus(401);

        const { rows:userInfo } = await connection.query(`
        SELECT u.id,u.url,u."shortUrl",u."visitCount" FROM urls u
        WHERE u."userId" = $1`,[session[0].userId])

        let totalVisits = 0
        userInfo.forEach(url => totalVisits+=url.visitCount);

        const body = {
            id: session[0].userId,
            name: session[0].name,
            visitCount: totalVisits,
            shortenedUrls: userInfo
        }

        res.status(200).send(body);
    } catch (error) {
        res.sendStatus(500);
    }
}