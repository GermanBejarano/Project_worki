const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlUserQueries');

const getUserByCredentials = async (user, pass) => {
    try {
        const result = await pool.query(sqlQueries.GET_USER_BY_CREDENTIALS, [user, pass]);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getUserByCredentials;