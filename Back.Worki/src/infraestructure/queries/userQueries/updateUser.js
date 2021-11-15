const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlUserQueries');

const updateUser = async (params, id) => {
    try {
        const result = await pool.query(sqlQueries.UPDATE_USER, [params, id]);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = updateUser;