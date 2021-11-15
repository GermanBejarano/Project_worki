const response = require('./responses/responses');
const hobbieQueries = require('../infraestructure/queries/hobbieQueries/hobbieQueriesModule');

exports.getHobbies = async (req, res, next) => {
    try {
        const hobbiesResult = await hobbieQueries.getHobbies();
        console.log('PRO:: '+JSON.stringify(hobbiesResult));

        response.success(req,res, hobbiesResult ,201,'successfully!');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};
