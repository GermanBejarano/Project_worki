const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlPostQueries');

const getPostsByUser = async (id_user) => {
    try {
        const result = await pool.query(sqlQueries.GET_POSTS_BY_USER, [id_user]);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getPostsByUser;