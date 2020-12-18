const axios                  = require('axios');
const _xmlLimite_positivo    = require('../xmls/xmlLimite_positivo');
const _xmlRisco_positivo     = require('../xmls/xmlRisco_positivo');
const _xmlNegocio_positivo   = require('../xmls/xmlNegocio_positivo');
const _xmlEssencial_positivo = require('../xmls/xmlEssencial_positivo');
const _xmlMais_positivo      = require('../xmls/xmlMais_positivo');

module.exports = {

  limite_positivo(xml) {
    return axios.post('https://definehom.bvsnet.com.br/DefinePositivoXml/servicos/defineLimitePositivo/v3', 
    xml,
    {
      headers: {
        'Content-Type': 'text/xml;charset=ISO-8859-1',
      }
    })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      return error
    });
  },

  risco_positivo(xml) {
    return axios.post('https://definehom.bvsnet.com.br/DefinePositivoXml/servicos/defineRiscoPositivo/v3', 
    xml,
    {
      headers: {
        'Content-Type': 'text/xml;charset=ISO-8859-1',
      }
    })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      return error
    });
  },

  negocio_positivo(xml) {
    return axios.post('https://definehom.bvsnet.com.br/DefinePositivoXml/servicos/defineNegocioPositivo/v3', 
    xml,
    {
      headers: {
        'Content-Type': 'text/xml;charset=ISO-8859-1',
      }
    })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      return error
    });
  },

  essencial_positivo(xml) {
    return axios.post('https://acertahom.bvsnet.com.br/FamiliaAcertaPositivoPFXmlWeb/essencial/v2', 
    xml,
    {
      headers: {
        'Content-Type': 'text/xml;charset=ISO-8859-1',
      }
    })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      return error
    });
  },

  mais_positivo(xml) {
    return axios.post('https://acertahom.bvsnet.com.br/FamiliaAcertaPositivoPFXmlWeb/mais', 
    xml,
    {
      headers: {
        'Content-Type': 'text/xml;charset=ISO-8859-1',
      }
    })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      return error
    });
  },
}