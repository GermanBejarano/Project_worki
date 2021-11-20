const response = require('./responses/responses');
const userQueries = require('../infraestructure/queries/userQueries/usersQueriesModule');
const transactionCommands = require('../infraestructure/queries/dBTransactionQueries/transactionCommandsModule');
const companyQueries = require('../infraestructure/queries/companyQueries/companyQueriesModule');

exports.getUsers = async (req, res, next) => {
    var result = {};
    try {
        const userResult = await userQueries.getUsers();

        result.state = true;
        result.users = userResult;
        response.success(req, res, result, 201, 'successfully!');
    } catch (error) {
        console.log(error.message);
        response.error(req, res, error.message, 400, 'Error');
    }
};

exports.getUserById = async (req, res, next) => {
    var result = {};
    try {
        const { id } = req.params;
        let Id = parseInt(id);
        const userResult = await userQueries.getUserById(Id);
        let user = userResult[0];

        result.state = true;
        result.user = user;
        response.success(req, res, result, 201, 'successfully!');
    } catch (error) {
        console.log(error.message);
        response.error(req, res, error.message, 400, 'Error');
    }
};

exports.getCompanies = async (req, res, next) => {
    var result = {};
    try {
        const companyResult = await companyQueries.getCompanies();

        result.state = true;
        result.companies = companyResult;
        response.success(req, res, result, 201, 'successfully!');
    } catch (error) {
        console.log(error.message);
        response.error(req, res, error.message, 400, 'Error');
    }
};

exports.getUserByCredentials = async (req, res, next) => {
    var result = {};
    try {
        const { user, pass, nit } = req.body;
        const userResult = await userQueries.getUserByCredentials(user, pass, nit);
        if (userResult.length > 0) {
            result.state = true;
            result.users = userResult;
        } else {
            result.state = false;
        }

        response.success(req, res, result, 201, 'successfully!');
    } catch (error) {
        console.log(error.message);
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