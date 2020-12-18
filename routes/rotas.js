const express = require('express');
const router  = express.Router();
const api     = require('../controllers/api');
const convert = require('xml-js');
const xml2js  = require('xml2js');

router.post('/limite_positivo', async function (req, res, next){
    let rps = JSON.parse(convert.xml2json(await api.limite_positivo(req.body), {compact: true, spaces: 4}));
    res.send(rps);
});

router.post('/negocio_positivo', async function (req, res, next){
    let rps = JSON.parse(convert.xml2json(await api.negocio_positivo(req.body), {compact: true, spaces: 4}));
    res.send(rps);
});
    
router.post('/risco_positivo', async function (req, res, next){
    let rps = JSON.parse(convert.xml2json(await api.risco_positivo(req.body), {compact: true, spaces: 4}));
    res.send(rps);
});
    
router.post('/essencial_positivo', async function (req, res, next){
    let rps = JSON.parse(convert.xml2json(await api.essencial_positivo(req.body), {compact: true, spaces: 4}));
    res.send(rps);
});
    
router.post('/mais_positivo', async function (req, res, next){
    let rps = JSON.parse(convert.xml2json(await api.mais_positivo(req.body), {compact: true, spaces: 4}));
    res.send(rps);
});

module.exports = router;