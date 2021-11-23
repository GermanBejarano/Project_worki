const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlEventQueries');

const getEvents = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_EVENTS);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getEvents;