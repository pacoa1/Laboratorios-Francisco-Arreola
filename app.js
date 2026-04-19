require('dotenv').config();
console.log('DB_NAME en app.js:', process.env.DB_NAME);

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');
const multer = require('multer');

const RutaUsers = require('./routes/users.routes');
const RutaJugadores = require('./routes/jugadores.routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

// Configuración de multer para el manejo de archivos
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        // 'uploads': Es el directorio del servidor donde se subirán los archivos
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        // Configuramos el nombre para que no haya duplicados usando el timestamp
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

const fileFilter = (request, file, callback) => {
    if (file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg') {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

// Registro de multer
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('archivo'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(session({
    secret: process.env.SESSION_SECRET || 'secret-default',
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