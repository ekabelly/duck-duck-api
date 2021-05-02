const fs = require('fs').promises;

const queriesFilePath = './assets/queries.json';

module.exports.saveQuery = async query => {
    const file = await fs.readFile(queriesFilePath);
    // turning json array into a set to avoid duplicates
    const queries = new Set(JSON.parse(file));
    queries.add(query);
    fs.writeFile(queriesFilePath, JSON.stringify([...queries]));
}

module.exports.serveQueries = async () => {
    const file = await fs.readFile(queriesFilePath);
    return JSON.parse(file);
}