const sanitizer = require('sanitize')();

module.exports = sniatize = (value, type) =>
    sanitizer.value(value, type);