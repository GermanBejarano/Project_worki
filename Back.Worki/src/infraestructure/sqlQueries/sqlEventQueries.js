const sqlQueries = {

    CREATE_EVENT:
        'INSERT INTO event SET ?',

    UPDATE_EVENT:
        'UPDATE event set ? WHERE id_event = ?',

    GET_EVENT_BY_ID:
        'SELECT * FROM event WHERE id_event = ?',

    GET_EVENTS:
        'SELECT * FROM event ORDER BY date DESC',

};
module.exports = sqlQueries;