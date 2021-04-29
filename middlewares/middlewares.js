const { errHandler: errHandler } = require('../middlewares/error-handler');
const errCodes = require('../constants/error-codes.json');
const ALLOWED_QUERY_PARAMS = require('../constants/allowed-query-params.json');

const validateQueryParams = (req, res, next) => {
  for (const param of Object.keys(req.query)) {
    if (!ALLOWED_QUERY_PARAMS.includes(param)) {
      return next(new Error(`Param ${param} is not allowed`));
    }
  }
  next();
}

const resHandler = (data, req, res) => !!data || data === 0
  ? res.send({ success: true, data }) : errHandler({ name: errCodes.NO_DATA_FOUND }, req, res);

module.exports = {
  validateQueryParams,
  resHandler,
  errHandler
}
  ;
