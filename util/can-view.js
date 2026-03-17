module.exports = (request, response, next) => {
    if (!request.session.privilegios || !request.session.privilegios.includes('ver_jugadores')) {
        return response.status(403).send('<h1>No tienes permiso para ver esto</h1><a href="/login">Regresar</a>');
    }
    next();
};