const axios = require('axios');
const _xmlLimite_positivo = require('../xmls/xmlLimite_positivo');

module.exports = {

  limite_positivo() {
    return axios.post('https://definehom.bvsnet.com.br/DefinePositivoXml/servicos/defineLimitePositivo/v3', 
    _xmlLimite_positivo,
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