const express = require('express');
const router  = express.Router();
const api     = require('../controllers/api');
const convert = require('xml-js');

router.post('/limite_positivo', async function (req, res, next){
    res.send({response: resultado = convert.xml2json(await api.limite_positivo(req), {compact: true, spaces: 4})});

    //var result = convert.xml2json(xml, {compact: true, spaces: 4});

    console.log(resultado);

    return resultado;
});

router.post('/negocio_positivo', (req, res, next) =>{
});

router.post('/risco_positivo', (req, res, next) =>{
});

router.post('/essencial_positivo', (req, res, next) =>{
});

router.post('/mais_positivo', (req, res, next) =>{
});

module.exports = router;