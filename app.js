const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const RutaActuales = require('./routes/actuales');
const RutaHistoricos = require('./routes/historicos');
const { html_header, html_footer } = require('./index');

app.use(bodyParser.urlencoded({extended: false}));

// Servir archivos CSS y JS
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

// Módulo 1: actuales
app.use(RutaActuales);

// Módulo 2: historicos
app.use(RutaHistoricos);

// 404
app.use((request, response) => {
    response.status(404).send(html_header + "Error 404" + html_footer);
});

app.listen(3000);