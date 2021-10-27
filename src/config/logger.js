const winston = require('winston');
const { combine, timestamp, label, printf, prettyPrint } = winston.format;




const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });

const levels = {    error: 0,    warn: 1,     info: 2,    http: 3,    verbose: 4,    debug: 5,    silly: 6  };

  const logger = winston.createLogger({
    format:combine(
        winston.format.colorize(),
        label({ label: process.env.PROJECT_NAME }),
        timestamp(),
        //prettyPrint()
         myFormat,
      // winston.format.simple()
      ),
    transports: [
    //   new winston.transports.Console(),
    //   new winston.transports.File({ filename: 'combined.log' }),

    //   new winston.transports.File({
    //     filename: 'errors.log',
    //     level: 'error'
    //   }),

    new winston.transports.File({
        filename: 'combined.log',
        level: 'info'
      }),
      new winston.transports.File({
        filename: 'errors.log',
        level: 'error'
      }),
     
    ]
  });

  module.exports=logger;