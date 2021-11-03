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
let helmet = require('helmet');
const httpStatus = require('http-status');
const { error } = require('winston');


const port = process.env.PORT;
app.use(express.json());
app.use(morganMiddleware);
app.use(process.env.API_VERSION, interface);
// app.use(helmet());
console.log(process.env.API_VERSION);
app.use(cors());
logger.warn("Hello From Logger");

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

