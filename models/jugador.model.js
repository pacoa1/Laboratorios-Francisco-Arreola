const jugadores = [];

module.exports = class Jugador {

    constructor(nombre, posicion, imagen) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.imagen = imagen;
    }

    save() {
        jugadores.push(this);
    }

    static fetchAll() {
        return jugadores;
    }
}