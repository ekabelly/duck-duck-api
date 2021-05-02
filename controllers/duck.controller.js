const express = require('express');
const duckRouter = express.Router();

const {sanitizePathParams} = require('../middlewares/middlewares');
const duckService = require('../services/duck.service');
const queriesService = require('../services/queries.service');

duckRouter.get('/past-queries', async (req, res, next) => {
    try {
        const results = await queriesService.serveQueries();
        res.send(results);
    } catch (e) {
        next(e);
    }
})

duckRouter.get('/:query', sanitizePathParams, async (req, res, next) => {
    try {
        const results = await duckService.getDuckRequest(req.params.query);
        res.send(results);
    } catch (e) {
        next(e);
    }
})


duckRouter.post('/:query', sanitizePathParams, async (req, res, next) => {
    try {
        queriesService.saveQuery(req.params.query);
        const results = await duckService.getDuckRequest(req.params.query);
        res.send(results);
    } catch (e) {
        next(e);
    }
})

module.exports = duckRouter;