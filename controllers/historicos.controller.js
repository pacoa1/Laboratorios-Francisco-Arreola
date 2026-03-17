const Jugador = require('../models/jugador.model');

exports.getHistoricos = (request, response) => {
    response.render('historicos');
};

exports.getNuevo = (request, response) => {
    response.render('nuevo');
};

exports.postNuevo = (request, response) => {
    console.log(request.body);
    const nuevo = new Jugador(
        request.body.nombre,
        request.body.posicion,
        request.body.imagen
    );
    nuevo.save();
    response.redirect('/');
};