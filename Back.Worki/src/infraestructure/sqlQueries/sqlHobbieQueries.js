const sqlQueries = {

    CREATE_HOBBIE:
        'INSERT INTO hobbie SET ?',

    UPDATE_HOBBIE:
        'UPDATE hobbie set ? WHERE id_hobbie = ?',

    GET_HOBBIE_BY_ID:
        'SELECT * FROM hobbie WHERE id_hobbie = ?',

    GET_HOBBIES:
        'SELECT * FROM hobbie',

};
module.exports = sqlQueries;