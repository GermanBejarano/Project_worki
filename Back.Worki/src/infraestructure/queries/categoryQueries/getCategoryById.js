const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlCategoryQueries');

const getCategoryById = async (id) => {
    try {
        const result = await pool.query(sqlQueries.GET_CATEGORY_BY_ID, id);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getCategoryById;