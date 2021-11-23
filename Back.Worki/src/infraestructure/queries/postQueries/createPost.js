const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlPostQueries');

const createPost = async (params) => {
    try {
        const result = await pool.query(sqlQueries.CREATE_POST, params);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = createPost;