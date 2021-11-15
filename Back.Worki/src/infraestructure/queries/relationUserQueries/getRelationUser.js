const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlRelationUserQueries');

const getRelationUser = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_USER_HOBBIE);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getRelationUser;