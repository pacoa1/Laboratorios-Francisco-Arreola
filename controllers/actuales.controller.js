const Jugador = require('../models/jugador.model');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.getInicio = (request, response) => {
    Jugador.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('inicio', {
                jugadores: rows,
                usuario: request.session.user ? request.session.user.nombre : null
            });
        })
        .catch(err => console.log(err));
};

exports.getLogin = (request, response) => {
    response.render('login');
};

exports.postLogin = (request, response) => {
    User.findByUsername(request.body.usuario)
        .then(([rows, fieldData]) => {
            if (rows.length === 0) {
                return response.redirect('/login');
            }
            const user = rows[0];
            bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        return request.session.save(err => {
                            response.redirect('/inicio');
                        });
                    }
                    response.redirect('/login');
                })
                .catch(err => {
                    response.redirect('/login');
                });
        })
        .catch(err => console.log(err));
};

exports.getSignup = (request, response) => {
    response.render('signup');
};

exports.postSignup = (request, response) => {
    const username = request.body.usuario;
    const password = request.body.password;
    const nombre = request.body.nombre;

    User.findByUsername(username)
        .then(([rows, fieldData]) => {
            if (rows.length > 0) {
                return response.redirect('/signup');
            }
            const user = new User(username, password, nombre);
            return user.save();
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