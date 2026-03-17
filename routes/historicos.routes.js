const express = require('express');
const router = express.Router();
const { jugadores } = require('./actuales.routes');

router.get('/historicos', (request, response) => {
    response.render('historicos');
});

router.get('/nuevo', (request, response) => {
    response.send(`
      <form action="/nuevo" method="POST">
        <input name="nombre" type="text" placeholder="Nombre">
        <input name="posicion" type="text" placeholder="Posición">
        <input name="imagen" type="text" placeholder="URL imagen">
        <button type="submit">Guardar</button>
      </form>
    `);
});

router.post('/nuevo', (request, response) => {
    console.log(request.body);
    const nuevo_jugador = {
      nombre: request.body.nombre,
      imagen: request.body.imagen,
    };
    jugadores.push(nuevo_jugador);
    response.redirect('/');
});

module.exports = router;