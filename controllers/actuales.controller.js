const Jugador = require('../models/jugador.model');

let inicializado = false;

exports.getInicio = (request, response) => {
    if (!request.session.usuario) {
        return response.redirect('/login');
    }
    if (!inicializado) {
        const tala = new Jugador(
            "Tala Rangel",
            "Portero",
            "https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fwebp%2Fchi%2Ffull%2FCHI_20250817_CHI_196865_Imago-1682444.webp&width=490&height=275"
        );
        tala.save();
        inicializado = true;
    }
    const jugadores = Jugador.fetchAll();
    response.render('inicio', {
        jugadores: jugadores,
        usuario: request.session.usuario
    });
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