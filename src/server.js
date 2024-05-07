require("dotenv").config({path:"variaveis.env"});
const  express = require('express');
const cors =require('cors')
const bodyParser =  require('body-parser');

const routes =  require('./routes');

const server  = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended :false}));

server.use('/api',routes);

server.listen(process.env.Port, ()=>{
    console.log(`Servidor rodando na porta ${process.env.Port}`);
})