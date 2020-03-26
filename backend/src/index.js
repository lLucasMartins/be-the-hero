const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/**Rotas e Recursos */
/**Metodos HTTP 
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar informação no Back-end
 * DELETE: Deletar uma informação no Back-end
*/

/**
 * TIPO DE PARAMENTROS
 * 
 * Query: PAramentros nomeado enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Paramentros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 BD

 SQL: MySQL, SQLite, PostgreSQL
 NoSQL: MongoDB, CouchDB


 Driver: SELECT * FROM users
 Query Builder: table('users').select('*').where()
 */



app.listen(3333);