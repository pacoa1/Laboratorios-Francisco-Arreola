const jugador = {
  nombre: "Chava Reyes",
  imagen: "https://storage.chivasdecorazon.com.mx/2018/noticias/big/32622.jpg?time1773212536",
  descripcion: `Salvador 'Chava' Reyes fue el delantero histórico del Club Guadalajara; 
    con 154 goles oficiales, se consolidó como el ídolo indiscutible y el arquitecto del Campeonísimo del Rebaño Sagrado.`,
  posicion: ["Delantero"],
}

const destacado = document.getElementById("jugador-destacado");
console.log(destacado);

const mostrar_descripcion = () => {
  destacado.innerHTML = `<p class='is-size-3 chivas-rojo'>${jugador.nombre}</p>
    <p>${jugador.descripcion}</p>
    <span class="tag tag-chivas">${jugador.posicion[0]}</span>
    `;
  destacado.onclick = mostrar_imagen;
}

const mostrar_imagen = () => {
  destacado.innerHTML =
    `<figure class="image">
      <img class="is-rounded" src="${jugador.imagen}" />
    </figure>`;
  destacado.onclick = mostrar_descripcion;
}

mostrar_imagen();
destacado.onclick = mostrar_descripcion;