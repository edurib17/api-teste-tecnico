const express = require('express');
const app = express();

app.use(express.json());

const ControllerClientes = require('./controllers/ControllerClientes');
const ControllerLavouras = require('./controllers/ControllerLavouras');

         ///********Clientes*****************///

//Insert Clientes
app.post('/clientes/insert',    ControllerClientes.insert);

//Update Clientes
app.put('/clientes/update/:id', ControllerClientes.update);

//Find All Clientes
app.get('/clientes',            ControllerClientes.findAll);

//Find By Id Clientes
app.get('/clientes/:id',        ControllerClientes.findById);






//***************Delete Clientes e Lavouras***************///
app.delete('/clientes/:id',     ControllerClientes.delete);


        ///********Lavouras*****************//

//Insert Lavouras
app.post('/lavouras/insert',    ControllerLavouras.insert);   

//Update Lavouras
app.put('/lavouras/update/:id', ControllerLavouras.update);

//Find All Lavouras
app.get('/lavouras',            ControllerLavouras.findAll);

//Find By Id Lavouras
app.get('/lavouras/:id',        ControllerLavouras.findById);


//*********************Deletar Apenas Lavoura***********//////
app.delete('/lavouras/:id',     ControllerLavouras.delete);












const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> {
    console.log(`API RODANDO NA PORTA ${PORT}`);
})

