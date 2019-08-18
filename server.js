const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
//esta modificacion es para desplegar la aplicacion en este caso heroku
const port = process.env.PORT || 3000; //en hambiente local tomara el puerto 3000
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
//express HBS engine
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    /*  let salida = {
          nombre: 'miguel',
          edad: 36,
          url: req.url
      };
      res.send(salida);*/
    res.render('home', {
        nombre: 'miguel angel'

    });
});
app.get('/about', function(req, res) {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});