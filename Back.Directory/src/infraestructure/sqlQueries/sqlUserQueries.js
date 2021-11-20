const sqlQueries = {

    GET_USER_BY_ID:
        'SELECT * FROM user WHERE id_user = ?',

    GET_USERS:
        'SELECT * FROM user',

    GET_USER_BY_CREDENTIALS:
        'SELECT u.nameuser, u.lastname, u.email, u.pass, u.rol, ' +
        'c.name, c.nit, c.phone, c.address ' +
        'FROM user u ' +
        'JOIN company c ON c.id_company = u.id_company ' +
        "WHERE u.email = ? AND u.pass = ? AND c.nit = ? "+
        'ORDER BY u.id_user DESC ',
};
module.exports = sqlQueries;