const { generateHtml } = require("../utils/helperFunctions")

function checkAuthState(req, res, next) {
    if (!res.headersSent) {
        if (req.originalUrl !== '/logout') {
            if (req.session.uid && req.session.role) {
                
                // Si hay una sesión iniciada pero el usuario NO es admin:
                if (req.session.role === 'user') {
                    const message = `
                    <h1>Usuario no autorizado</h1>
                    <div class="unauthorized-container">
                        <h4>Su usuario no tiene permisos de administrador</h4> 
                        <p>Si desea acceder al dashboard, cierre la sesión actual e inicie sesión con una cuenta de administrador</p>
                        <div class="auth-options">
                            <a class="btn" href="/shop/products">Volver</a>
                            <form action="/shop/logout" method="post">
                                <button class="btn" type="submit">Logout</button>
                            </form>
                        </div>
                    </div>`
                    res.status(200).send(generateHtml(message, req))
                } else {
                    next()
                }
            } else { 
                // Si no hay una sesión iniciada
                res.status(401).redirect('/shop/login') }
        } else {
            // Si la solicitud es para logout, continúa sin realizar ninguna redirección
            next()
        }
    } else {
        // Si las cabeceras ya han sido enviadas (indicando que ya se ha redirigido), pasa al siguiente middleware
        next()
    }
}

module.exports = checkAuthState