const response = require('./responses/responses');
const categoryQueries = require('../infraestructure/queries/categoryQueries/categoryQueriesModule');

exports.getCategories = async (req, res, next) => {
    try {
        const categoriesResult = await categoryQueries.getCategories();
        console.log('PRO:: '+JSON.stringify(categoriesResult));

        response.success(req,res, categoriesResult ,201,'successfully!');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};
