const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid'); //id único
app.use(express.json()); //Request Body


const projects = []; //fazer assim já que não vimos banco de dados ainda
                    //jamais utilizar em PROD (pq toda alteração se reinicia - volta para array vazio)


// app.get('/projects', (request, response) => {
//     const { title, owner } = request.query;

//     console.log(title);
//     console.log(owner);

//     return response.json([
//         'Projeto 1',
//         'Projeto 2'
//     ]);
// });

//Filtro Query
app.get('/projects', (request, response) => {
    const { title } = request.query;

    const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;
    
    return response.json(results);
});

app.post('/projects', (request, response) => {
    const { title, owner} = request.body;
    //console.log(title, owner);
    const project = { id: uuidv4(), title, owner };

    projects.push(project);

    return response.json(project); //exibir projeto 
});

app.put('/projects:id', (request, response) => {
    const {id} = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id ===id);

    if (projectIndex < 0){
        return response.status(400).json({ error: 'Project not found.' })
    }
    
    const project = {
        id,
        title,
        owner,
    };
    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id ===id);

    if (projectIndex < 0){
        return response.status(400).json({ error: 'Project not found.' })
    }   

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('🚀 Back-end Started 🚀');
});

