const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const { database } = require('./config/keys');
const MySQLStore = require('express-mysql-session')(session);
const path = require('path');
const app = express();
const dotenv = require('dotenv');

const userRoutes = require('./src/routes/userRoutes');
const hobbieRoutes = require('./src/routes/hobbieRoutes');


if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

// Port configuration
app.set('port', process.env.PORT || 4000);

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json(({ extended: true })));

app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
})

// Routes
app.use(userRoutes);
app.use(hobbieRoutes);


app.listen(app.get('port'), () => {
    console.log(`The serve starts at  http://localhost:${process.env.PORT}`)
});