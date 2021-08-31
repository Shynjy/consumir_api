// Express
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = new express()

// libera o acesso do servidor

app.use((req, resp, next) => {
  resp.header("Access-Control-Allow-Origin", "*");
  resp.header("Access-Control-Allow-Methods", ['GET', 'PUT', 'POST', 'DELETE']);
  app.use(cors());
  next();
});

// Crud verbo GET
app.get('/', async (req, res) => {
  try {
    // response é a resposta do axios MAS eu tiro o .data de dentro do response
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    return res.json(data)
  } catch (error) {
    console.error(error)
  }

})

// Porta que deve ser escutada
app.listen('3333')
// http://localhost:3333/