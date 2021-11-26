require('dotenv').config();
var status = require('http-status')
const express = require('express');
const database = require('./config/database')
const app = express();
const interface = require('./router/interface');
const logger = require('./config/logger');
const morganMiddleware = require('./middleware/morgan');
let { ApiError } = require('./payload/apiErrors');
//let cors = require('cors');
const httpStatus = require('http-status');
const i18n = require('i18n')
const cookieParser = require("cookie-parser");
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const port = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(morganMiddleware);
app.use(i18n.init)
app.use(process.env.API_VERSION, interface);


// app.use(helmet());
console.log(process.env.API_VERSION);
//app.use(cors());
// Locale Configuration

i18n.configure({
    locales: ['en', 'es', 'so'],
    defaultLocale: 'en',
    cookie: 'currentLocale',
    directory: __dirname + '/locales'
});

app.use((req, res, next) => {
    let status = httpStatus.NOT_FOUND;
    let error = 'API Not Found'
    res.status(status).send(new ApiError(status, error));
});



// Error Handling Exception
app.use((err, req, res, next) => {
    res.status(401).send(err);
});

app.listen(port, (req, res) => {
    console.log("We are listening Port:" + port);
});


