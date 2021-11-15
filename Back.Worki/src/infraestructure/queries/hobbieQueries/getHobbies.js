const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlHobbieQueries');

const getHobbies = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_HOBBIES);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getHobbies;