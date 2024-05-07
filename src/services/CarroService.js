
const db = require('../db')
module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros', (error, result) =>  {
                if(error){rejeitado(error); return;}
                aceito(result);
            });
        });
    },

    buscarUm: (codigo)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros WHERE codigo=?', [codigo], (error, results) => {
                if(error)  {rejeitado(error);return;}
                if(results.length > 0){
                    aceito(results[0]);
                }
                else{
                    aceito(false);
                }
            });
        });
    },

    adicionar: (modelo, placa)=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO carros (modelo, placa) values (?,?)', [modelo,placa], (error, results) => {
                
                if(error)  {rejeitado(error);return;}
                aceito(results.adicionarCodigo)
            });
        });
    },

    alterar: (codigo, modelo, placa)=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE carros SET modelo=?, placa=? WHERE codigo=? ', [modelo,placa,codigo], (error, results) => {
                
                if(error)  {rejeitado(error);return;}
                aceito(results)
            });
        });
    },

    remover: (codigo) =>{
            return new Promise((aceito, rejeitado)=>{
                db.query('DELETE FROM carros WHERE codigo=?',[codigo], (error, result) =>  {
                    if(error){rejeitado(error); return;}
                    aceito(result);
                });
            });
        },

};