const express = require('express');
const duckRouter = express.Router();

const {sanitizePathParams} = require('../middlewares/middlewares');
const duckService = require('../services/duck.service');

duckRouter.get('/:query', sanitizePathParams, async (req, res, next) => {
    try {
        const results = await duckService.getDuckRequest(req.params.query);
        res.send(results);
    } catch (e) {
        next(e);
    }
})

module.exports = duckRouter;