const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-yft4i.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();

// Aceitar json se não retorna Undefined
app.use(express.json())
app.use(routes)

// Passando o caminho da rota
// Client é o nosso front-end
// As respostas enviadas para o cliente devem ser sempre em json
// Métodos HTTP: GET, POST, PUT DELETE
// Tipos de parâmetros
// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar alteração e remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB(Não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello OminiStack' });
});

//Subindo servidor na porta
app.listen(3333);