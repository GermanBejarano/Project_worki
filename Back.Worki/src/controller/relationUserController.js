const response = require('./responses/responses');
const relationUser = require('../infraestructure/queries/relationUserQueries/relationUserQueriesModule');

exports.getRelationUsers = async (req, res, next) => {
    try {
        const relationUserResult = await relationUser.getRelationUser();
        console.log('PRO:: '+JSON.stringify(relationUserResult));

        response.success(req,res, relationUserResult ,201,'successfully!');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};
