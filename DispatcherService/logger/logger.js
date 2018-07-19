require('dotenv').config();
const winston = require('winston');
const appRoot = require('app-root-path');
const {format} = require('logform');
const {Loggly} = require('winston-loggly-bulk');

const logFormat = format.printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
  });

var options = {
    app: {
      level: 'info',
      filename: `${appRoot.path}/logs/app.log`,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: true
    },
    exceptions : {
      filename: `${appRoot.path}/logs/exceptions.log`,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false
    },
    loggly : {
      token: process.env.LOGGLY_TOKEN,
      subdomain: process.env.LOGGLY_SUBDOMAIN,
      tags: ["Winston-NodeJS"],
      json:true
    },
    console: {
      level: 'error',
      json: false,
      colorize: true,
    },
};

const logger = winston.createLogger({
    format : format.combine (
        format.label({ label: 'Uber Application logs' }),
        format.timestamp(),
        logFormat
    ),
    transports : [
        new winston.transports.File(options.app),
        new winston.transports.Console(options.console),
        new Loggly(options.loggly)
    ],
    exceptionHandlers: [
        new winston.transports.File(options.exceptions)
    ],
    exitOnError : false
});

logger.stream = {
    write: function(message, encoding) {
        // use the 'info' log level so the output will be picked up by all transports (file and console)
        logger.info(message);
    },
};

module.exports = {
    logger
}