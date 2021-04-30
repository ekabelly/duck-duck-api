const errorCodes = require('../constants/error-codes.json');

module.exports = {
  errHandler(err = { name: errorCodes.UNKNOWN_ERROR }, req, res) {
    let status = 500;
    console.warn(err);
    // send the error code to the client
    if (err.name === errorCodes.NO_DATA_FOUND) {
      status = 404;
    }
    res.status(status).send({
      err: err.name,
      message: err.message,
      success: false
    });
  }
};
