const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlPostQueries');

const updatePost = async (params, id) => {
    try {
        const result = await pool.query(sqlQueries.UPDATE_POST, [params, id]);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = updatePost;