const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const { database } = require('./config/keys');
const MySQLStore = require('express-mysql-session')(session);
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const fileupload = require("express-fileupload");
const cors = require("cors");

const userRoutes = require('./src/routes/userRoutes');
const hobbieRoutes = require('./src/routes/hobbieRoutes');
const positionRoutes = require('./src/routes/positionRoutes');
const relationUserRoutes = require('./src/routes/relationUserRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const eventRoutes = require('./src/routes/eventRoutes');
const postRoutes = require('./src/routes/postRoutes');


if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

// Port configuration
app.set('port', process.env.PORT || 4000);

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json(({ extended: true })));
app.use(cors());
app.use(fileupload());
// app.use(express.static("files"));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });


app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
})

// Routes
app.use(userRoutes);
app.use(hobbieRoutes);
app.use(positionRoutes);
app.use(relationUserRoutes);
app.use(categoryRoutes);
app.use(eventRoutes);
app.use(postRoutes);



app.listen(app.get('port'), () => {
    console.log(`The serve starts at  http://localhost:${process.env.PORT}`)
});