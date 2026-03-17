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
            response.redirect('/inicio');
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
            response.redirect('/inicio');
        })
        .catch(err => console.log(err));
};