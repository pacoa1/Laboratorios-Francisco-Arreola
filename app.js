const http = require("http");
const fs = require("fs");

const html_header = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Chivas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title" style="color:#CD2E3A;">
        Chivas - Rebaño Sagrado
      </h1>
      <p class="subtitle">
        Mi app de jugadores
      </p>
`;

const html_footer = `
    </div>
  </section>
  </body>
</html>
`;

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

const jugadores = [
  {
    nombre: "Tala Rangel",
    imagen: "https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fwebp%2Fchi%2Ffull%2FCHI_20250817_CHI_196865_Imago-1682444.webp&width=490&height=275"
  },
];

const server = http.createServer((request, response) => {

  if (request.url == "/css/style.css") {
    response.setHeader('Content-Type', 'text/css');
    response.write(fs.readFileSync("css/style.css", "utf-8"));
    response.end();

  } else if (request.url == "/js/comportamientos.js") {
    response.setHeader('Content-Type', 'application/javascript');
    response.write(fs.readFileSync("js/comportamientos.js", "utf-8"));
    response.end();

  } else if (request.url == "/") {
    response.setHeader('Content-Type', 'text/html');
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
    response.write(html_header + html_index + html_footer);
    response.end();

  } else if (request.url == "/historicos") {
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header + `
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
    response.end();

  } else if (request.url == "/nuevo" && request.method == "GET") {
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header + html_form + html_footer);
    response.end();

  } else if (request.url == "/nuevo" && request.method == "POST") {
    const datos_completos = [];
    request.on('data', (data) => {
      console.log(data);
      datos_completos.push(data);
    });

    request.on('end', () => {
      const string_datos_completos = Buffer.concat(datos_completos).toString();
      console.log(string_datos_completos);
      const nombre = string_datos_completos.split("&")[0].split("=")[1];
      const posicion = string_datos_completos.split("&")[1].split("=")[1];
      const imagen = string_datos_completos.split("&")[2].split("=")[1];
      const nuevo_jugador = {
        nombre: nombre,
        imagen: imagen,
      };
      jugadores.push(nuevo_jugador);

      response.setHeader('Content-Type', 'text/html');
      response.write(html_header + `
        <p><strong>${nombre}</strong> se agregó al Rebaño.</p>
        <a href="/">Regresar</a>
      ` + html_footer);
      response.end();
    });

  } else {
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header + "Error 404" + html_footer);
    response.end();
  }
});

server.listen(3000);