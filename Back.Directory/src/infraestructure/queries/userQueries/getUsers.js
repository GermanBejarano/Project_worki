const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlUserQueries');

const getUsers = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_USERS);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getUsers;