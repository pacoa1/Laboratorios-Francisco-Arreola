const Jugador = require('../models/jugador.model');

exports.getHistoricos = (request, response) => {
    response.render('historicos');
};

exports.getNuevo = (request, response) => {
    response.render('nuevo');
};

exports.postNuevo = (request, response) => {
    const nuevo = new Jugador(
        request.body.nombre,
        request.body.posicion,
        request.body.imagen
    );
    nuevo.save()
        .then(() => {
            response.redirect('/inicio/jugadores/actuales');
        })
        .catch(err => console.log(err));
};

exports.getEditar = (request, response) => {
    const id = request.params.jugador_id;
    Jugador.fetchOne(id)
        .then(([rows, fieldData]) => {
            response.render('editar', {jugador: rows[0]});
        })
        .catch(err => console.log(err));
};

exports.postEditar = (request, response) => {
    Jugador.update(
        request.body.id,
        request.body.nombre,
        request.body.posicion,
        request.body.imagen
    )
        .then(() => {
            response.redirect('/jugadores/' + request.body.id);
        })
        .catch(err => console.log(err));
};

exports.getJugador = (request, response) => {
    const id = request.params.jugador_id;
    Jugador.fetchOne(id)
        .then(([rows, fieldData]) => {
            if (rows.length === 0) {
                return response.status(404).send('<h1>Jugador no encontrado</h1><a href="/inicio/jugadores/actuales">Regresar</a>');
            }
            response.render('jugador', {
                jugador: rows[0],
                privilegios: request.session.privilegios || []
            });
        })
        .catch(err => console.log(err));
};