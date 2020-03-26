// método UP é responsavel pela criação da minha tabela
// todo UP tem um down como opção caso de erro ele executara o down
exports.up = function(knex) {
    //Criando nossa tabela ongd com o campo id(chave primaria)
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
    //Caso for preciso, deletamos a tabela
  returnknex.schema.dropTable('ongs');
};
