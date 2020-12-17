const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const app        = express();
const rotas      = require('./routes/rotas');
let cors         = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text({type:'*/*'}))

var allowedOrigins = ['http://localhost:4200','http://10.0.0.102:4200','http://127.0.0.1:4200','http://167.71.186.67','http://trevilub.snk.ativy.com:40009'];
app.use(bodyParser.text({type:'*/*'}))
app.use(cors({

  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },

   credentials: true,
}));

app.use('/rotas', rotas);

app.use((req, res, next) =>{
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((req, res, next) =>{    
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem: error.message
        }
    });
});

module.exports = app;