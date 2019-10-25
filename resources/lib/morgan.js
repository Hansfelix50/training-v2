const logger = require('./logger');
const morgan = require('morgan');

module.exports = function (app) {
    app.use(morgan('short', {
        skip: function (req, res) {
            return res.statusCode >= 400;
        },
        stream: {
            write: message => logger.info(message.trim()),
        }
    }));

    app.use(morgan('short', {
        skip: function (req, res) {
            return res.statusCode < 400;
        },
        stream: {
            write: message => logger.error(message.trim()),
        }
    }));
};