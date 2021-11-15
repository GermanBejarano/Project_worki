const response = require('./responses/responses');
const userQueries = require('../infraestructure/queries/userQueries/usersQueriesModule');


exports.createUser = async (req, res, next) => {
    try {
        const { name, description, start_date, end_date } = req.body;

        const newProject = {
            name: name,
            description: description,
            start_date: start_date,
            end_date: end_date,
            id_general_state: 1,
            created: new Date(),
            createdby: req.user.name,
            updated: null,
            updatedby: null
        };
        // console.log('REQ3: ' + JSON.stringify(newProject));
        // console.log('REQ2: ' + JSON.stringify(req.user, getCircularReplacer()));
        // const projects = await projectQueries.createProject(newProject);

        response.success(req,res, '',201,'successfully! ');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};



exports.editProject = async (req, res, next) => {
    try {
        const {id} = req.params;
        const { name, description, start_date, end_date } = req.body;

        const start = start_date != '' ? start_date : undefined;
        const end = end_date != '' ? end_date : undefined;

        console.log('HELLOO: ' + end);
        const updateProject = {
            name: name,
            description: description,
            start_date: start,
            end_date: end,
            updated: new Date(),
            updatedby: req.user.name
        };
        console.log('REQ3: ' + JSON.stringify(updateProject));
        const projects = await projectQueries.updateProject(updateProject, id);

        response.success(req,res, '',201,'successfully! ');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};

exports.getProjectById = async (req, res, next) => {
    try {
        const { id } = req.params;
        let Id = parseInt(id);
        const resultProject = await projectQueries.getProjectById(Id);
        let project = resultProject[0];
        console.log('PRO:: '+JSON.stringify(project));

        response.success(req,res, project ,201,'successfully!');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
    }
};

exports.getProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        let Id = parseInt(id);
        const resultProject = await projectQueries.getProjectById(Id);
        let project = resultProject[0];
        console.log('PRO:: '+JSON.stringify(project));

        response.success(req,res, project ,201,'successfully!');
    } catch (error) {
        response.error(req, res, 'Error', 400, error.message);
        console.log(error);
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