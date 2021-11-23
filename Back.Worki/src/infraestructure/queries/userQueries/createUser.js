const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlUserQueries');

const createUser = async (params) => {
    try {
        const result = await pool.query(sqlQueries.CREATE_USER, params);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = createUser;