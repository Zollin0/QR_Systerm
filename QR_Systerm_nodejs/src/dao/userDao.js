const db = require('../utils/dbConnPool/mariadb');

exports.getUserId = async (userId) => {
    const sql = `
        SELECT
            user_id AS userId,
            password
        FROM
            user
    `;
    const sqlParams = [userId];
    return await db.query(sql);
};