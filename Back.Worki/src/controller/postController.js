const response = require('./responses/responses');
const transactionCommands = require('../infraestructure/queries/dBTransactionQueries/transactionCommandsModule');
const postQueries = require('../infraestructure/queries/postQueries/postQueriesModule');
const userQueries = require('../infraestructure/queries/userQueries/usersQueriesModule');
const categoryQueries = require('../infraestructure/queries/categoryQueries/categoryQueriesModule');
const postDTO = require('../infraestructure/model/post/postDTO');

exports.getPosts = async (req, res, next) => {
    try {
        const postResult = await postQueries.getPosts();
        console.log('PRO:: ' + JSON.stringify(postResult));

        response.success(req, res, postResult, 201, 'successfully!');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};

exports.getPostsDaily = async (req, res, next) => {
    try {
        const { id_user, date } = req.query;

        const postResult = await postQueries.getPostsDaily(id_user, date);
        console.log('PRO:: ' + JSON.stringify(postResult));

        response.success(req, res, postResult, 201, 'successfully!');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};

exports.getPostsByUser = async (req, res, next) => {
    try {
        const { id_user } = req.query;

        const postResult = await postQueries.getPostsByUser(id_user);
        console.log('PRO:: ' + JSON.stringify(postResult));

        response.success(req, res, postResult, 201, 'successfully!');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};

exports.createFilePost = async (req, res, next) => {
    var result = {};
    try {
        const { id } = req.params;
        let Id = parseInt(id);
        const file = req.files.file;
        const filename = file.name;

        console.log('file: ' + file);
        console.log('filename: ' + filename);

        file.mv(`./files/${filename}`, (err) => {
            if (err) {
                console.log("File upload failed");
            } else {
                console.log("File Uploaded");
            }
        });

        const postFileRecord = {
            file: filename,
            updated: new Date()
        }

        await transactionCommands.beginTransaction();
        const postUpdateResult = await postQueries.updatePost(postFileRecord, Id);
        console.log('REQ3: ' + JSON.stringify(postUpdateResult));
        await transactionCommands.commitTransaction();

        result.state = true;

        response.success(req, res, result, 201, 'successfully! ');
    } catch (error) {
        console.log(error.message);
        await transactionCommands.rollbackTransaction();
        response.error(req, res, error.message, 400, 'Error');
    }
};

exports.createPost = async (req, res, next) => {
    var result = {};
    try {
        const { title, description, status, id_user, id_category } = req.body;

        console.log('id_user: ' + JSON.stringify(req.body));

        // console.log('REQ2: ' + JSON.stringify(req, getCircularReplacer()));
        const newIdUser = Number(id_user);
        const userResult = await userQueries.getUserById(newIdUser);
        if (userResult.length == 0)
            throw new Error('User not exists');

        const categoryResult = await categoryQueries.getCategoryById(id_category);
        if (categoryResult.length == 0)
            throw new Error('Category not exists');

        const postRecord = postDTO(
            title,
            description,
            status,
            null,
            id_user,
            id_category
        );

        await transactionCommands.beginTransaction();
        const postResult = await postQueries.createPost(postRecord);
        console.log('REQ3: ' + JSON.stringify(postResult));
        const postId = postResult.insertId;
        await transactionCommands.commitTransaction();

        result.state = true;
        result.postid = postId;

        response.success(req, res, result, 201, 'successfully! ');
    } catch (error) {
        console.log(error.message);
        await transactionCommands.rollbackTransaction();
        response.error(req, res, error.message, 400, 'Error');
    }
};


const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};