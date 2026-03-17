const db = require('../util/database');

module.exports = class Jugador {

    constructor(nombre, posicion, imagen) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.imagen = imagen;
    }

    save() {
        return db.execute(
            'INSERT INTO jugadores (nombre, posicion, imagen) VALUES (?, ?, ?)',
            [this.nombre, this.posicion, this.imagen]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM jugadores');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM jugadores WHERE id = ?', [id]);
    }

    static update(id, nombre, posicion, imagen) {
        return db.execute(
            'UPDATE jugadores SET nombre = ?, posicion = ?, imagen = ? WHERE id = ?',
            [nombre, posicion, imagen, id]
        );
    }
}