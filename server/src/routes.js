const { Router } = require('express');


const AnsController = require ('./AnsController');

const routes = new Router();

routes.get('/operadoras', AnsController.getOperadoras);


module.exports = routes;
