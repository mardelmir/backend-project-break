// Archivo que contendrá el middleware para comprobar si el usuario está autenticado. Este buscará la sesión del usuario y, si no la encuentra, redirigirá al formulario de login.

const jwt = require('jsonwebtoken') 
require('dotenv').config() // para secret

function verifyToken (req, res, next) {
    const token = req.session.token
    if (!token) {
        return res.status(401).json({mensaje: 'token no generado'})
    } 
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if(error) {
            return res.status(401).json({mensaje: 'token inválido'})
        }
        req.user = decoded.user
        next()
    })
}

module.exports = verifyToken