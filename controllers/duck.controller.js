const express = require('express');
const duckRouter = express.Router();

const {sanitizeStrings} = require('../middlewares/middlewares');
const duckService = require('../services/duck.service');

duckRouter.get('/:query', sanitizeStrings, async (req, res, next) => {
    try {
        const results = await duckService.getDuckRequest(req.params.query);
        res.send(results);
    } catch (e) {
        next(e);
    }
})

module.exports = duckRouter;