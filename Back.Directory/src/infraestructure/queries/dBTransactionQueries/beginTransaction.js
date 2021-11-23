const pool = require('../../../../config/database');
const sqlQueries = require('../../sqlQueries/sqlDbTransactionQueries');

const beginTransaction = async () => {
    try {
        const result = await pool.query(sqlQueries.BEGIN_TRANSACTION);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = beginTransaction;