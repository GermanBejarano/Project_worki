const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlPositionQueries');

const getPositions = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_POSITIONS);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getPositions;