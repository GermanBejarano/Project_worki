const response = require('./responses/responses');
const positionQueries = require('../infraestructure/queries/positionQueries/positionQueriesModule');

exports.getPositions = async (req, res, next) => {
    try {
        const positionsResult = await positionQueries.getPositions();
        console.log('PRO:: '+JSON.stringify(positionsResult));

        response.success(req,res, positionsResult ,201,'successfully!');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};
