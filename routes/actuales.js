const express = require('express');
const router = express.Router();
const { html_header, html_footer } = require('../index');

const jugadores = [
  {
    nombre: "Tala Rangel",
    imagen: "https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fwebp%2Fchi%2Ffull%2FCHI_20250817_CHI_196865_Imago-1682444.webp&width=490&height=275"
  },
];

// RUTA 1: Inicio
router.get('/', (request, response) => {
    let html_index = `
      <a href="/nuevo"><button class="button is-danger">Nuevo jugador</button></a>
      <a href="/historicos"><button class="button is-link">Jugadores históricos</button></a>
      <div class="columns">`;

    for (let jugador of jugadores) {
      html_index += `
        <div class="column">
          ${jugador.nombre}
          <figure class="image">
            <img class="is-rounded" src="${jugador.imagen}" />
          </figure>
        </div>`;
    }

  html_index += `
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">Historia y Grandeza del Club Deportivo Guadalajara</h1>
          <div class="content">
            <ul>
              <li>
                <strong>Fundación:</strong> 8 de mayo de 1906. Fundado por el belga Edgar Everaert y el francés Calixto Gas bajo el nombre de "Club Unión". En 1908 adoptó el nombre de Guadalajara.
              </li>
              <li>
                <strong>La Tradición Nacionalista:</strong> Aunque hoy es su mayor estandarte comercial e identitario, la política de jugar <em>únicamente con futbolistas mexicanos</em> no fue desde sus inicios. Se instauró formalmente en 1943 al iniciar la era profesional.
              </li>
              <li>
                <strong>Apodos:</strong> El Rebaño Sagrado, Chivas, El Campeonísimo, Rojiblancos.
              </li>
              <li>
                <strong>Estadios Históricos:</strong> Empezaron en el Parque Oblatos, forjaron su grandeza en el mítico Estadio Jalisco, y desde 2010 su casa es el Estadio Akron en Zapopan, Jalisco.
              </li>
              <li>
                <strong>Palmarés Principal:</strong> 12 títulos de Primera División, 4 Copas México, 7 Campeones de Campeones, 1 Supercopa MX y 2 Ligas de Campeones de la CONCACAF.
              </li>
              <li>
                <strong>El Campeonísimo (1956-1965):</strong> La dinastía más dominante del fútbol mexicano. Ganaron 7 títulos de liga en 9 años. La racha fue iniciada por el técnico Donald Ross en la 56-57 y llevada a su máximo esplendor por el Ing. Javier de la Torre.
              </li>
              <li>
                <strong>Leyendas Fundadoras:</strong> Salvador "Chava" Reyes (arquitecto del Campeonísimo y leyenda goleadora con 154 tantos), Jaime "Tubo" Gómez, José "Jamaicón" Villegas e Ignacio Calderón.
              </li>
              <li>
                <strong>Ídolos Modernos:</strong> Omar Bravo (máximo goleador histórico con 160 goles oficiales), Ramón Morales, Oswaldo Sánchez, Carlos Salcido y Javier "Chicharito" Hernández.
              </li>
              <li>
                <strong>La Era Almeyda (2015-2018):</strong> El último gran resurgimiento del club. Bajo el mando de Matías Almeyda, rompieron una fuerte sequía ganando 1 Liga (Clausura 2017), 2 Copas MX, 1 Supercopa y 1 Concachampions.
              </li>
              <li>
                <strong>Rivalidades de Sangre:</strong> 
                <ul>
                  <li><em>Clásico Nacional:</em> vs. Club América. La mayor rivalidad y hostilidad deportiva del país.</li>
                  <li><em>Clásico Tapatío:</em> vs. Atlas. El derbi más antiguo de México (desde 1916), disputando el orgullo de la ciudad.</li>
                </ul>
              </li>
              <li>
                <strong>Chivas Femenil:</strong> Pioneras históricas al convertirse en el primer equipo campeón en la historia de la Liga MX Femenil (Apertura 2017), sumando su segundo título en el Clausura 2022.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
    response.send(html_header + html_index + html_footer);
});

// RUTA 2: Acerca
router.get('/acerca', (request, response) => {
    response.send(html_header + `
      <h2 class="title is-4">Acerca de</h2>
      <p>App creada por Francisco Arreola para el Laboratorio 11 de Construcción de Software.</p>
      <br>
      <a href="/" class="button is-danger">Regresar</a>
    ` + html_footer);
});

module.exports = router;
module.exports.jugadores = jugadores;