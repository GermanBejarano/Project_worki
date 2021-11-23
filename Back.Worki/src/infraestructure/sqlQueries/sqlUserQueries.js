const sqlQueries = {

    CREATE_USER:
        'INSERT INTO user SET ? ',

    UPDATE_USER:
        'UPDATE user set ? WHERE id_user = ?',

    GET_USER_BY_ID:
        'SELECT u.*, c.name as company, c.nit, p.id_position, p.name as position '+
        'FROM user u '+
        'JOIN company c ON c.id_company = u.id_company '+
        'LEFT JOIN position p ON p.id_position = u.id_position '+
        'WHERE u.id_user = ? '+
        'ORDER BY u.id_user DESC',

    GET_USERS:
        'SELECT * FROM user',

    GET_USER_BY_CREDENTIALS:
        'SELECT COUNT(*) as value, id_user, id_company ' +
        'FROM user ' +
        "WHERE email = ? AND pass = ? " +
        'GROUP BY id_user, id_company ' +
        'ORDER BY id_user ASC ',

};
module.exports = sqlQueries;