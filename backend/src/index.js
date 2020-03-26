const express = require('express'); // chamando o metodo express
const routes = require('./routes') /// chamando o arquivo routes onde fica as rotas da aplicação
const cors = require('cors'); //

const app = express(); //adicionando o mesmo dentro da minha variavel app

//informando que para todo meu codigo sera utilizado JSON, converte o JSON em um objeto JavaScript


//Com este comando limitamos a utilização do nossa api para um link especifico
//Apenas para quando subirmos nosso projeto para produção
// app.use(cors({
//     origin: 'LINK DO MEU FRONT END'
// })); 
app.use(cors());

app.use(express.json());

app.use(routes);

// ROTA / RECURSO

// metodos 
// GET : BUSCA INFORMAÇÃODO BACKEND
// POST : CRIA INFORMAÇÃO NO BACKEND
// PUT : ALTERA UMA INFORMAÇÃO NO BACKEND
// DELETE : DELETA UMA INFOMRAÇÃO NO BACK END

// Query Params: parametros nomeados enviados na rota após "?" (Filtros, paginação)
// Route params: paramtros utilizados para identificar recursos
// Request Body : corpo da requisição, utilizado para criar ou alterar recursos 

app.listen(3333); // chamando o listen para ouvir a porta 3333