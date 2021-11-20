const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlUserQueries');

const getUserByCredentials = async (user, pass, nit) => {
    try {
        const result = await pool.query(sqlQueries.GET_USER_BY_CREDENTIALS, [user, pass, nit]);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getUserByCredentials;