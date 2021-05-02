const fs = require('fs');

module.exports.saveQuery = query => {
    const stream = fs.createWriteStream('./assets/queries.txt', {flags: 'a'});
    stream.write(query + "\n");
}