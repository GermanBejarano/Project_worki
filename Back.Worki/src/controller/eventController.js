const response = require('./responses/responses');
const eventQueries = require('../infraestructure/queries/eventQueries/eventQueriesModule');

exports.getEvents = async (req, res, next) => {
    try {
        const eventsResult = await eventQueries.getEvents();
        console.log('PRO:: '+JSON.stringify(eventsResult));

        response.success(req,res, eventsResult ,201,'successfully!');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};
