const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlUserQueries');

const getUserById = async (id) => {
    try {
        const result = await pool.query(sqlQueries.GET_USER_BY_ID, id);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getUserById;