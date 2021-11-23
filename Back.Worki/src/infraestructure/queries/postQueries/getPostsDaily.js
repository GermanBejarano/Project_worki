const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlPostQueries');

const getPostsDaily = async (id_user, date) => {
    try {
        const result = await pool.query(sqlQueries.GET_POSTS_DAILY, [id_user, date]);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getPostsDaily;