require('dotenv').config();
var status = require('http-status')
const express = require('express');
const database =require('./config/database')
const app = express();
//const morgan = require('morgan')
const interface = require('./router/interface');
const logger = require('./config/logger');
const morganMiddleware = require('./middleware/morgan');
let { ApiError } = require('./payload/apErrors');
let cors = require('cors');
const httpStatus = require('http-status');
const i18n = require('i18n')
const cookieParser = require("cookie-parser");


const port = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(morganMiddleware);
app.use(i18n.init)
app.use(process.env.API_VERSION, interface);
// app.use(helmet());
console.log(process.env.API_VERSION);
app.use(cors());
logger.warn("Hello From Logger");

// Locale Configuration
 i18n.configure({
    // setup some locales - other locales default to en silently
    locales: ['en', 'es', 'so'],
    // you may alter a site wide default locale
    defaultLocale: 'en',
    // sets a custom cookie name to parse locale settings from
    cookie: 'currentLocale',
    // where to store json files - defaults to './locales'
    directory: __dirname + '/locales'
});

app.use((req, res, next) => {

    let status = httpStatus.NOT_FOUND;
    //let message = "Not Found"
    let error = 'API Not Found'

    res.status(status).send(new ApiError(status, Error));

});

//Error Handling Exception
app.use((err, req, res, next) => {
    res.status(401).send(err);
});


app.listen(port, (req, res) => {
    console.log("We are listening Port:" + port);
});

