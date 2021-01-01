const { response } = require('express');
const db = require('../config/db');



module.exports = {

    async insert(req,res){
        let datas ={
            "nome_lavoura":req.body.nome_lavoura,
            "hectares":req.body.hectares, 
            "lat":req.body.lat,
            "lng":req.body.lng,
            "id_cliente":req.body.id_cliente,
        }
        try {
            let response = await db.query('INSERT INTO lavouras SET ?',[datas]);
            res.json(response);
        }catch(error){
            console.log(error);
        }       
    },


    async update(req,res){
        let id = req.params.id;

        let datas ={
            "nome_lavoura":req.body.nome_lavoura,
            "hectares":req.body.hectares, 
            "lat":req.body.lat,
            "lng":req.body.lng,
            "id_cliente":req.body.id_cliente,
        }
     try {
         let response = await db.query('UPDATE lavouras SET ? WHERE id_lavouras = ?',[datas,id]);
         res.json(response);
     }catch(error){
         console.log(error);
     } 
    },


    async findAll(req,res){
        try{
            let response = await db.query('select n.nome as Cliente, l.nome_lavoura as Lavoura, l.hectares as Hectare,l.lat as Latitude, l.lng as Longitude, l.data_lav as Data from clientes n , lavouras l where n.id_cliente = l.id_cliente ;');
            res.json(response[0])
        }catch(error) {
            console.log(error);
        }
    },


    async findById(req,res){
        let id = req.params.id;
        try {
            let response = await db.query(`select n.nome as Cliente, l.nome_lavoura as Lavoura, l.hectares as Hectare,l.lat as Latitude, l.lng as Longitude,l.data_lav as Data from clientes n , lavouras l where n.id_cliente = ${id}  and  n.id_cliente = l.id_cliente`);
            res.json(response[0]);
        }catch(error){
            console.log(error);
        }
    },


    async delete(req,res){
        let id = req.params.id;
        try{
            let response = await db.query(`DELETE  FROM lavouras WHERE id_lavouras = ${id}`);
            res.json(response);
        }catch(error){
            console.log(error)
        }
    }
    
}