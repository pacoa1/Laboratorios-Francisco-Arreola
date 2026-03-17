const Jugador = require('../models/jugador.model');

exports.getHistoricos = (request, response) => {
    if (!request.session.usuario) {
        return response.redirect('/login');
    }
    response.render('historicos');
};

exports.getNuevo = (request, response) => {
    if (!request.session.usuario) {
        return response.redirect('/login');
    }
    response.render('nuevo');
};

exports.postNuevo = (request, response) => {
    if (!request.session.usuario) {
        return response.redirect('/login');
    }
    console.log(request.body);
    const nuevo = new Jugador(
        request.body.nombre,
        request.body.posicion,
        request.body.imagen
    );
    nuevo.save();
    response.redirect('/inicio');
};