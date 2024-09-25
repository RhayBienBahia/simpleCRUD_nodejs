const express = require('express');
const routes = express.Router();
const controller = require('../controller/controller');

routes.get('/', controller.main);
routes.post('/save', controller.save);
routes.get('/information', controller.information);


module.exports = routes;