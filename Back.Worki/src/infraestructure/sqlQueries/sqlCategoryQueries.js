const sqlQueries = {

    CREATE_CATEGORY:
        'INSERT INTO category SET ?',

    UPDATE_CATEGORY:
        'UPDATE category set ? WHERE id_category = ?',

    GET_CATEGORY_BY_ID:
        'SELECT * FROM category WHERE id_category = ?',

    GET_CATEGORIES:
        'SELECT * FROM category',

};
module.exports = sqlQueries;