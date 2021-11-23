const sqlQueries = {

    CREATE_POST:
        'INSERT INTO post SET ?',

    UPDATE_POST:
        'UPDATE post set ? WHERE id_post = ?',

    GET_POST_BY_ID:
        'SELECT * FROM post WHERE id_post = ?',

    GET_POSTS:
        'SELECT * FROM post ORDER BY id_post DESC ',

    GET_POSTS_DAILY:
        'SELECT COUNT(*) as count FROM post ' +
        'WHERE id_user = ? ' +
        "AND date_format(created, '%Y-%m-%d') = ? " +
        'ORDER BY id_post DESC ',

    GET_POSTS_BY_USER:
        'SELECT * FROM post p ' +
        'JOIN user u ON u.id_user = p.id_user ' +
        'WHERE u.id_user = ? ' +
        'ORDER BY p.id_post DESC',

};
module.exports = sqlQueries;