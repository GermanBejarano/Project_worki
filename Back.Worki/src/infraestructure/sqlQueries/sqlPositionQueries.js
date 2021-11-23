const sqlQueries = {

    CREATE_POSITION:
        'INSERT INTO position SET ?',

    UPDATE_POSITION:
        'UPDATE position set ? WHERE id_position = ?',

    GET_POSITION_BY_ID:
        'SELECT * FROM position WHERE id_position = ?',

    GET_POSITIONS:
        'SELECT * FROM position',

};
module.exports = sqlQueries;