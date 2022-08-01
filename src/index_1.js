const express = require('express');
const app = express();
app.use(express.json()); //Request Body

/**
 * Métodos HTTP:
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PaTCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros:
 * Query Parms: Filtros e paginação
 * oute Parms: Identificar recursos (atualizar/deletar)
 * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 */

// app.get('/', (request, response) => {
//     return response.json({ message: "Hello World!" });
// });

// app.get('/projects', (request, response) => {
//     return response.json([
//         'Projeto 1',
//         'Projeto 2'
//     ]);
// });

// app.get('/projects', (request, response) => {
//     const query = request.query;
//     console.log(query);

//     return response.json([
//         'Projeto 1',
//         'Projeto 2'
//     ]);
// });

//desestruturando os parâmetros (cada parametrocom uma variavel separada)
app.get('/projects', (request, response) => {
    const { title, owner } = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.post('/projects', (request, response) => {
    //const body = request.body;
    const { title, owner} = request.body;
    console.log(title, owner);
    
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projects:id', (request, response) => {
    //const params = request.params;
    const {id} = request.params;
    console.log(id);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.delete('/projects:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.listen(3333, () => {
    console.log('🚀 Back-end Started 🚀');
});

