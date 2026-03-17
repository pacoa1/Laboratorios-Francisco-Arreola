module.exports = (request, response, next) => {
    if (!request.session.privilegios || !request.session.privilegios.includes('crear_jugadores')) {
        return response.status(403).send('<h1>No tienes permiso para crear jugadores</h1><a href="/inicio/jugadores/actuales">Regresar</a>');
    }
    next();
};