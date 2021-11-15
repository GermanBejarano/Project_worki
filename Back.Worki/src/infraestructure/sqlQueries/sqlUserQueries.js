const sqlQueries = {

    CREATE_USER:
        'INSERT INTO user SET ?',

    UPDATE_USER:
        'UPDATE user set ? WHERE id_user = ?',

    GET_USER_BY_ID:
        'SELECT * FROM user WHERE id_user = ?',

    GET_USERS:
        'SELECT * FROM user',

};
module.exports = sqlQueries;