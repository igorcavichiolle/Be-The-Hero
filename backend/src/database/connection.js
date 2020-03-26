const knex = require('knex'); 
const configuration = require('../../knexfile');

//Conexao de desenvolvimento
const connection = knex(configuration.development);

module.exports = connection;