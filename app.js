// app.get('*', (req, res, next) => {
//   if (req.headers['natalidroescher.tk'] != 'https') {
      
      // checa se o header é HTTP ou HTTPS

            // res.redirect("https://" + req.headers.host + req.url);
            
      // faz o redirect para HTTPS

        // } else {
        //     next();
            
      // segue com a sequência das rotas

      //   }
      // });

      var express = require('express');
      var app = express();
      
      app.get('/', function (req, res) {
      
        const options = {
          timeZone: 'America/Sao_Paulo',
          hour: 'numeric',
          minute: 'numeric'
        };
        const date = new Intl.DateTimeFormat([], options);
        // res.send(date.format(new Date()));
        
        res.send('<h1>Hello World!</h1>'+date.format(new Date()));
      });
      
      app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
       
      });

module.exports = app;
