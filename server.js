var express = require('express'),
    api     = require('./api'),
    app     = express();

app
    .use(express.static('./public'))
    .use('/api', api)
    .get('*', function (req, res) {
        if (!req.user) {
            res.sendFile( __dirname + '/public/main.html');
        } else
                {
                    res.sendFile( __dirname + '/public/main.html');
                }
        })
    .listen(4000);