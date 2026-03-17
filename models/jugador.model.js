const db = require('../util/database');

module.exports = class Jugador {

    constructor(nombre, id_posicion, imagen) {
        this.nombre = nombre;
        this.id_posicion = id_posicion;
        this.imagen = imagen;
    }

    save() {
        return db.execute(
            'INSERT INTO jugadores (nombre, id_posicion, imagen) VALUES (?, ?, ?)',
            [this.nombre, this.id_posicion, this.imagen]
        );
    }

    static fetchAll() {
        return db.execute(
            `SELECT jugadores.*, posiciones.nombre AS posicion 
             FROM jugadores 
             INNER JOIN posiciones ON jugadores.id_posicion = posiciones.id`
        );
    }

    static fetchOne(id) {
        return db.execute(
            `SELECT jugadores.*, posiciones.nombre AS posicion 
             FROM jugadores 
             INNER JOIN posiciones ON jugadores.id_posicion = posiciones.id 
             WHERE jugadores.id = ?`, [id]
        );
    }

    static fetchPosiciones() {
        return db.execute('SELECT * FROM posiciones');
    }

    static update(id, nombre, id_posicion, imagen) {
        return db.execute(
            'UPDATE jugadores SET nombre = ?, id_posicion = ?, imagen = ? WHERE id = ?',
            [nombre, id_posicion, imagen, id]
        );
    }
}