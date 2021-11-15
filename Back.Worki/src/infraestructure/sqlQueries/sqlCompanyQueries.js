const sqlQueries = {

    CREATE_COMPANY:
        'INSERT INTO company SET ?',

    UPDATE_COMPANY:
        'UPDATE company set ? WHERE id_company = ?',

    GET_COMPANY_BY_ID:
        'SELECT * FROM company WHERE id_company = ?',

    GET_COMPANIES:
        'SELECT * FROM company',

    GET_COMPANY_BY_NIT:
        'SELECT * FROM company WHERE nit = ?',

};
module.exports = sqlQueries;