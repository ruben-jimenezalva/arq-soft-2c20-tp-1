const express = require('express');
const app = express();

const PORT = 3500;
const TIMEOUT = 5*1000;

app.get('/', (req, res) =>{
    res.status(200).send('Ping node');
});

app.get('/timeout', (req, res) =>{
    setTimeout(()=>{
        res.status(200).send('timeout');
    },TIMEOUT);
});

//endpoint que simule un procesamiento intesivo
app.get('/heavy', (req, res) =>{
    let start  = new Date();
    while(new Date() - start <= TIMEOUT){
    }
    res.status(200).send('heavy');
});


app.listen(PORT,()=>{"Escuchando en el puerto " + PORT });