import connection from "../dbStrategy/postgres.js";

export async function getRanking(_,res){
    try {
        const { rows:body } = await connection.query(`
        SELECT usr.id,usr.name,COUNT(u.id) as "linksCount",
        COALESCE(SUM(u."visitCount"),0) as "visitCount" FROM users usr
        LEFT JOIN urls u ON usr.id = u."userId"
        GROUP BY usr.id
        ORDER BY "visitCount" DESC
        LIMIT 10`);

        res.status(200).send(body)
    } catch (error) {
        res.sendStatus(500);
    }
}