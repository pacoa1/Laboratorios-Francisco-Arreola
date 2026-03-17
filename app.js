const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');

const RutaUsers = require('./routes/users.routes');
const RutaJugadores = require('./routes/jugadores.routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'chivas-rebano-sagrado-secreto-2026',
    resave: false,
    saveUninitialized: false,
}));

const csrfProtection = csrf();
app.use(csrfProtection);

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use('/', RutaUsers);
app.use('/jugadores', RutaJugadores);

// 404
app.use((request, response) => {
    response.status(404).send('<h1>Error 404</h1><a href="/inicio/jugadores/actuales">Regresar</a>');
});

app.listen(3000);