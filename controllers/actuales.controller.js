const Jugador = require('../models/jugador.model');

exports.getInicio = (request, response) => {
    if (!request.session.usuario) {
        return response.redirect('/login');
    }
    Jugador.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('inicio', {
                jugadores: rows,
                usuario: request.session.usuario
            });
        })
        .catch(err => console.log(err));
};

exports.getLogin = (request, response) => {
    response.render('login');
};

exports.postLogin = (request, response) => {
    request.session.usuario = request.body.usuario;
    response.redirect('/inicio');
};

exports.getLogout = (request, response) => {
    request.session.destroy(() => {
        response.redirect('/login');
    });
};