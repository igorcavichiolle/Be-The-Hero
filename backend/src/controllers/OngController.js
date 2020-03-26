const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    //LISTANDO TODAS AS ONGS DA TABELA ONGS
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    
    async create(request, response){
        //CRIANDO UM NOVO REGISTRO NA TABELA ONGS
        //RETORNANDO UM HEX(4) QUE FOI GERADO AUTOMATICAMENTE
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

        return response.json({ id });
    }
};