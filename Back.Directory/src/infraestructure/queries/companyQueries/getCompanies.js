const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlCompanyQueries');

const getCompanies = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_COMPANIES);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getCompanies;