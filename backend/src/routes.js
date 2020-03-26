//Separamos as rotas que utilizamos na aplicação, este arquivo conterá nossas rotas
//Toda vez que for necessario acessar uma rota, sera chamado este arquivo

const express = require('express');
//importando o controlle para ongs
const OngController = require('./controllers/OngController');
//importando o controller de incidents
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

//Criando sessao de autenticação da ong
routes.post('/sessions', SessionController.create)

//Rota que realiza uma consulta de todas as ongs cadatradas
//Retornando todas dendo de uma array JSON
routes.get('/ongs', OngController.index)
//Rota que insere registro na tabela ongs e retorna o id da ong que é gerado automaticamente 
routes.post('/ongs', OngController.create);

//Rota que busca todos os incidentes da ong logada
routes.get('/profile', ProfileController.index);
//Retorna todos os incidents do banco
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;