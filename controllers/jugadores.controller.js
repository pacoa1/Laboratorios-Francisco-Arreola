const Jugador = require('../models/jugador.model');

exports.getHistoricos = (request, response) => {
    response.render('historicos');
};

exports.getNuevo = (request, response) => {
    Jugador.fetchPosiciones()
        .then(([rows, fieldData]) => {
            response.render('nuevo', {posiciones: rows});
        })
        .catch(err => console.log(err));
};

exports.postNuevo = (request, response) => {
    const nuevo = new Jugador(
        request.body.nombre,
        request.body.id_posicion,
        request.file ? request.file.path : ''
    );
    nuevo.save()
        .then(() => {
            response.redirect('/inicio/jugadores/actuales');
        })
        .catch(err => console.log(err));
};

exports.getEditar = (request, response) => {
    const id = request.params.jugador_id;
    const jugadorPromise = Jugador.fetchOne(id);
    const posicionesPromise = Jugador.fetchPosiciones();

    Promise.all([jugadorPromise, posicionesPromise])
        .then(([[jugadorRows], [posicionesRows]]) => {
            response.render('editar', {
                jugador: jugadorRows[0],
                posiciones: posicionesRows
            });
        })
        .catch(err => console.log(err));
};

exports.postEditar = (request, response) => {
    let imagen = request.body.imagen_vieja;
    if (request.file) {
        imagen = request.file.path;
    }

    Jugador.update(
        request.body.id,
        request.body.nombre,
        request.body.id_posicion,
        imagen
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