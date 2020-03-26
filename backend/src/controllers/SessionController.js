const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        //Faz requisição atravez do id passado no front
        const { id } = request.body;

        //retorna o primeiro registro onde o id é igual ao ong id
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        //Caso nao tenha nenhuma ong com esse id, retorna erro en formato JSON
        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }
        
    return response.json(ong);
    }
}