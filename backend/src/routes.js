/* eslint-disable no-undef */

const { Router } = require('express');
const DevController = require('./controller/DevController');

const routes = Router();

routes.get('/devs', DevController.store);

module.exports = routes;
