const sqlQueries = {

    CREATE_PROJECT:
        'INSERT INTO project SET ?',

    UPDATE_PROJECT:
        'UPDATE project set ? WHERE id_project = ?',

    GET_PROJECT_BY_ID:
        'SELECT * FROM project WHERE id_project = ?',

    GET_PROJECTS:
        'SELECT * FROM project',

};
module.exports = sqlQueries;