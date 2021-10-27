const status = require('http-status');
const validate = (schema) => (req, res, next) => {
    let { error, value } = schema.validate(req.body);

    if (error) {
        let message = error.details[0].message;
        let errorMessage={status: status.BAD_REQUEST, message:message}
        return res.status(status.BAD_REQUEST).send(errorMessage);
    }
    next()
}

module.exports = validate


