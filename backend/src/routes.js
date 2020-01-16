const { Router } = require('express');

const routes = Router();

routes.get('/users', (req, res) => res.json({ ok: 'true' }));

module.exports = routes;
