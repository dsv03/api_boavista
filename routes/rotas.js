const express = require('express');
const router  = express.Router();
const api     = require('../controllers/api');
const convert = require('xml-js');
const xml2js = require('xml2js');

router.post('/limite_positivo', async function (req, res, next){
    let rps = JSON.parse(convert.xml2json(await api.limite_positivo(req), {compact: true, spaces: 4}));
    res.send(rps);
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