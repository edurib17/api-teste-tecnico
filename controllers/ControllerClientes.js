const { response } = require('express');
const db = require('../config/db');

module.exports = {

  async insert(req,res){
        let datas ={
            "nome":req.body.nome,
            "email":req.body.email, 
            "endereco":req.body.endereco, 
            "estado":req.body.estado, 
            "pais":req.body.pais,
            "contato":req.body.contato,
        }
        try {
            let response = await db.query('INSERT INTO clientes SET ?',[datas]);
            res.json(response);
        }catch(error){
            console.log(error);
        }       
    },

   async update(req,res){
       let id = req.params.id;

       let datas ={
        "nome":req.body.nome,
        "email":req.body.email, 
        "endereco":req.body.endereco, 
        "estado":req.body.estado, 
        "pais":req.body.pais,
        "contato":req.body.contato 
    }

    try {
        let response = await db.query('UPDATE clientes SET ? WHERE id_cliente = ?',[datas,id]);
        res.json(response);
    }catch(error){
        console.log(error);
    } 

   },

   async findAll(req,res){

      try{
           let response = await db.query('SELECT * FROM clientes');
           res.json(response[0])
       }catch(error) {
           console.log(error);
       } 

   },

   async findById(req,res){
       let id = req.params.id;
       try {
           let response = await db.query(`SELECT * FROM clientes WHERE id_cliente = ${id}`);
           res.json(response[0]);
       }catch(error){
           console.log(error);
       }
   }, 

   async delete(req,res){
       let id = req.params.id;
       try{
           let response = await db.query(`DELETE  FROM clientes WHERE id_cliente = ${id}`);
           res.json(response);
       }catch(error){
           console.log(error)
       }
   }

}


