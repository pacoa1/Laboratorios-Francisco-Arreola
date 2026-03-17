const Jugador = require('../models/jugador.model');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const db = require('../util/database');

exports.getInicio = (request, response) => {
    Jugador.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('inicio', {
                jugadores: rows,
                usuario: request.session.user ? request.session.user.nombre : null,
                privilegios: request.session.privilegios || []
            });
        })
        .catch(err => console.log(err));
};

exports.getLogin = (request, response) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        error: error
    });
};

exports.postLogin = (request, response) => {
    User.findByUsername(request.body.usuario)
        .then(([rows, fieldData]) => {
            if (rows.length === 0) {
                request.session.error = 'Usuario y/o password no coinciden';
                return response.redirect('/login');
            }
            const user = rows[0];
            bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        return db.execute(
                            `SELECT p.privilegio FROM privilegios p
                             INNER JOIN otorga o ON p.id = o.id_privilegio
                             INNER JOIN tiene t ON o.id_rol = t.id_rol
                             WHERE t.id_usuario = ?`, [user.username]
                        ).then(([rows]) => {
                            request.session.privilegios = rows.map(r => r.privilegio);
                            return request.session.save(err => {
                                response.redirect('/inicio/jugadores/actuales');
                            });
                        });
                    }
                    request.session.error = 'Usuario y/o password no coinciden';
                    return response.redirect('/login');
                })
                .catch(err => {
                    console.log(err);
                    response.redirect('/login');
                });
        })
        .catch(err => console.log(err));
};

exports.getSignup = (request, response) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('signup', {
        error: error
    });
};

exports.postSignup = (request, response) => {
    const username = request.body.usuario;
    const password = request.body.password;
    const confirmar = request.body.confirmar;
    const nombre = request.body.nombre;

    if (password !== confirmar) {
        request.session.error = 'Los passwords no coinciden';
        return response.redirect('/signup');
    }

    User.findByUsername(username)
        .then(([rows, fieldData]) => {
            if (rows.length > 0) {
                request.session.error = 'El usuario ya existe';
                return response.redirect('/signup');
            }
            const user = new User(username, password, nombre);
            return user.save().then(() => {
                return db.execute('INSERT INTO tiene (id_usuario, id_rol) VALUES (?, 2)', [username]);
            });
        })
        .then(() => {
            response.redirect('/login');
        })
        .catch(err => console.log(err));
};

exports.getLogout = (request, response) => {
    request.session.destroy(() => {
        response.redirect('/login');
    });
};