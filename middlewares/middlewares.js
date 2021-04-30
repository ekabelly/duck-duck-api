const { errHandler: errHandler } = require('../middlewares/error-handler');
const errCodes = require('../constants/error-codes.json');
const sanitize = require('../util/snitize');

const sanitizePathParams = (req, res, next) => {
  for (const paramName of Object.keys(req.params)) {
    req.params[paramName] = sanitize(req.params[paramName], 'str');
  }
  next();
}

const resHandler = (data, req, res) => !!data || data === 0
  ? res.send({ success: true, data }) : errHandler({ name: errCodes.NO_DATA_FOUND }, req, res);

module.exports = {
  sanitizePathParams,
  resHandler,
  errHandler
};
