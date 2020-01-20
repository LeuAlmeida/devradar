/* eslint-disable no-undef */

const { Router } = require('express');
const DevController = require('./controller/DevController');
const SearchController = require('./controller/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/devs/:id', DevController.delete);
routes.put('/devs/:id', DevController.update);

routes.get('/search', SearchController.index);

module.exports = routes;
