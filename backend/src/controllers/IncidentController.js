const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        //Adicionando paginação, apenas 5 registro de cada vez
        const { page = 1} = request.query;

        const [count] = await connection('incidents').count();
        console.log(count);
        const incidents = await connection('incidents')
        //Fazendo join com a tabela ongs para retornar os campos email, whatsapp, cidade e estado
        //Referente ao incidente
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        //Retorna no cabeçalho da requisição o total de registros na tabela incidents
        response.header('X-Total-Count', count['count(*)']);
        
        return response.json(incidents);
    },
    async create(request, response){
        const { title, description, value } = request.body;
        //pegando id a ong logada para vincular um incident a uma ong
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection ('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        // Validação para confirmar se a ong logada está realmente apagando um incident dela propria
        if(incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permitted.'})
        }

        //Deletando registro
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }

};