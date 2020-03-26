
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //id autoincrement
        table.increments();

        //Campos da tabela
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //Cria chave estrangeira que vira da tabela ongs
        table.string('ong_id').notNullable();

        //Criando referencia a tabela ongs, campo id = ong_id
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
