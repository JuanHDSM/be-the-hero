const express = require('express');

const OngController = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentsControllers');
const ProfileController = require('./controllers/ProfileControllers');
const SessionController = require('./controllers/SessionControllers');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index) ;

routes.post('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)
module.exports = routes;