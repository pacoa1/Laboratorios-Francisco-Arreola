const express = require('express');
const router = express.Router();
const fs = require('fs');
const { html_header, html_footer } = require('../index');
const { jugadores } = require('./actuales');

const html_form = `
<form action="/nuevo" method="POST">
  <div class="field">
    <label for="nombre" class="label">Nombre</label>
    <div class="control">
      <input id="nombre" name="nombre" class="input" type="text" placeholder="e.g. Chicharito">
    </div>
  </div>

  <div class="field">
    <label for="posicion" class="label">Posición</label>
    <div class="control">
      <input id="posicion" name="posicion" class="input" type="text" placeholder="e.g. Delantero">
    </div>
  </div>

  <div class="field">
    <label for="imagen" class="label">Imagen</label>
    <div class="control">
      <input id="imagen" name="imagen" class="input" type="text" placeholder="e.g. https://ejemplo.com/foto.jpg">
    </div>
  </div>

  <input class="button is-danger" type="submit" value="Guardar">
</form>
`;

// RUTA 3: Históricos
router.get('/historicos', (request, response) => {
    response.send(html_header + `
      <a href="/"><button class="button is-danger">Regresar</button></a>
      <br><br>
      <h2 class="title is-4">Jugadores Históricos</h2>
      <div class="columns">
        <div class="column">
          Chicharito
          <figure class="image">
            <img class="is-rounded" src="https://s.yimg.com/ny/api/res/1.2/ecpD7J8CpwR.YPCoPI8NPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg7Y2Y9d2VicA--/https://s.yimg.com/os/creatr-uploaded-images/2022-08/66e3d770-18f7-11ed-9ed3-6ba43a29946e" />
          </figure>
        </div>
        <div class="column">
          <div id="jugador-destacado"></div>
        </div>
      </div>
      <script src="/js/comportamientos.js"></script>
    ` + html_footer);
});

// RUTA 4: Formulario GET
router.get('/nuevo', (request, response) => {
    response.send(html_header + html_form + html_footer);
});

// RUTA 5: Formulario POST
router.post('/nuevo', (request, response) => {
    console.log(request.body);
    const nombre = request.body.nombre;
    const posicion = request.body.posicion;
    const imagen = request.body.imagen;

    const nuevo_jugador = {
      nombre: nombre,
      imagen: imagen,
    };
    jugadores.push(nuevo_jugador);

    // Guardar en archivo de texto
    const linea = nombre + " | " + posicion + " | " + imagen + "\n";
    fs.appendFileSync("jugadores.txt", linea, "utf-8");
    console.log("Guardado en jugadores.txt");

    response.send(html_header + `
      <p><strong>${nombre}</strong> se agregó al Rebaño.</p>
      <a href="/">Regresar</a>
    ` + html_footer);
});

module.exports = router;