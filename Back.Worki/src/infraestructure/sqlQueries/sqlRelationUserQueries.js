const sqlQueries = {

    CREATE_USER_HOBBIE:
        'INSERT INTO user_hobbie SET ?',

    UPDATE_USER_HOBBIE:
        'UPDATE user_hobbie set ? WHERE id_user_hobbie = ?',

    GET_USER_HOBBIE:
        'SELECT * FROM user_hobbie',

};
module.exports = sqlQueries;