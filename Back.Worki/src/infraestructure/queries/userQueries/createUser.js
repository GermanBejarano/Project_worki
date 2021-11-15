const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlUserQueries');

const createUser = async (subtask) => {
    try {
        const result = await pool.query(sqlQueries.CREATE_PROJECT, subtask);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = createUser;