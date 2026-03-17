const db = require('../util/database');
const bcrypt = require('bcrypt');

module.exports = class User {

    constructor(username, password, nombre) {
        this.username = username;
        this.password = password;
        this.nombre = nombre;
    }

    save() {
        return bcrypt.hash(this.password, 12)
            .then(hashedPassword => {
                return db.execute(
                    'INSERT INTO users (username, password, nombre) VALUES (?, ?, ?)',
                    [this.username, hashedPassword, this.nombre]
                );
            });
    }

    static findByUsername(username) {
        return db.execute('SELECT * FROM users WHERE username = ?', [username]);
    }
}