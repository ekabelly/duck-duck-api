const errorCodes = require('../constants/error-codes');

module.exports = {
  errHandler (err = { name: errorCodes.UNKNOWN_ERROR }, req, res) {
    console.warn(err);
    // send the error code to the client
    res.send((500), {
      err: err.name,
      message: err.message,
      success: false
    });
  }
};
