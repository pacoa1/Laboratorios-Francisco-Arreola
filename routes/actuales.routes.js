const express = require('express');
const router = express.Router();

const jugadores = [
  {
    nombre: "Tala Rangel",
    imagen: "https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fwebp%2Fchi%2Ffull%2FCHI_20250817_CHI_196865_Imago-1682444.webp&width=490&height=275"
  },
];

router.get('/', (request, response) => {
    response.render('inicio', {jugadores: jugadores});
});

router.get('/acerca', (request, response) => {
    response.send('<h2>Acerca de</h2><p>App creada por Francisco Arreola - Lab 12</p><a href="/">Regresar</a>');
});

module.exports = router;
module.exports.jugadores = jugadores;