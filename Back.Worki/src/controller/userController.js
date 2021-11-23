const response = require('./responses/responses');
const userQueries = require('../infraestructure/queries/userQueries/usersQueriesModule');
const companyQueries = require('../infraestructure/queries/companyQueries/companyQueriesModule');
const transactionCommands = require('../infraestructure/queries/dBTransactionQueries/transactionCommandsModule');
const userDTO = require('../infraestructure/model/user/userDTO');
const userUpdateDTO = require('../infraestructure/model/user/userUpdateDTO');

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

exports.createUser = async (req, res, next) => {
    var result = {};
    try {
        const { name, lastname, email, pass, rol, nit_company, status } = req.body;

        const companyResult = await companyQueries.getCompanyByNit(nit_company);
        if (companyResult.length == 0)
            throw new Error('Company not exists');

        const recordResult = await userQueries.getUserByCredentials(email, pass);

        if (recordResult[0].value == 1){
            result.state = true;
            result.userid = recordResult[0].id_user;
            result.companyid = recordResult[0].id_company;
            result.newuser = false;
        }else{
            const companyId = companyResult[0].id_company;

            const userRecord = userDTO(
                name,
                lastname,
                email,
                pass,
                rol,
                companyId,
                status
            );
    
            await transactionCommands.beginTransaction();
            const userResult = await userQueries.createUser(userRecord);
            console.log('REQ3: ' + JSON.stringify(userResult));
            console.log('REQ2: ' + JSON.stringify(req, getCircularReplacer()));
            const userId = userResult[0];
            await transactionCommands.commitTransaction();
    
            result.state = true;
            result.userid = userId;
            result.companyid = companyId;
            result.newuser = true;
        }
        
        response.success(req, res, result, 201, 'successfully! ');
    } catch (error) {
        console.log(error.message);
        await transactionCommands.rollbackTransaction();
        response.error(req, res, error.message, 400, 'Error');
    }
};

exports.updateUser = async (req, res, next) => {
    var result = {};
    try {
        const { id } = req.params;
        const { name, lastname, email, pass, rol, companyid, img, state, professional_tastes, not_bother, id_position, status } = req.body;

        const consultUser = await userQueries.getUserById(id);
        if (consultUser.length == 0)
            throw new Error('User not exists');

        const user = consultUser[0];

        const userRecord = userUpdateDTO(
            name,
            lastname,
            email,
            pass,
            rol,
            companyid,
            img,
            state,
            professional_tastes,
            not_bother,
            id_position,
            status
        );

        await transactionCommands.beginTransaction();
        const userResult = await userQueries.createUser(userRecord, id);
        console.log('REQ3: ' + JSON.stringify(userResult));
        await transactionCommands.commitTransaction();

        result.state = true;
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