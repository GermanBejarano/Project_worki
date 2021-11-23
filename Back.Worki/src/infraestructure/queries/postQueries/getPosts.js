const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlPostQueries');

const getPosts = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_POSTS);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getPosts;