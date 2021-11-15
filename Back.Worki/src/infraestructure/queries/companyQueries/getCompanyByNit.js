const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlCompanyQueries');

const getCompanyByNit = async (nit) => {
    try {
        const result = await pool.query(sqlQueries.GET_COMPANY_BY_NIT, nit);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getCompanyByNit;