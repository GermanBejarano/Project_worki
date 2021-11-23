const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlCategoryQueries');

const getCategories = async () => {
    try {
        const result = await pool.query(sqlQueries.GET_CATEGORIES);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getCategories;