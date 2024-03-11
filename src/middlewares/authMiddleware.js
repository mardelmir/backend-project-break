const { generateHtml } = require("../utils/helperFunctions")
const { unauthorizedUser, notLoggedIn } = require("../utils/htmlTemplates")

// const firebaseApp = require("../config/firebase");
// const { getAuth, onAuthStateChanged } = require('firebase/auth');
// const auth = getAuth(firebaseApp)

// function checkAuthState(req,res,next) {
//     onAuthStateChanged(auth, (user) => {
//         if(user) {
//             next();
//         } else {
//             res.redirect('/login/');
//         }
//     })
// }

function checkAuthState(req, res, next) {
    if (!res.headersSent) {
        if (req.originalUrl.includes('/shop/dashboard') && req.originalUrl !== '/shop/logout') {
            if (!req.session.uid || !req.session.role) {
                res.status(200).send(generateHtml(notLoggedIn, req))
            } else if (req.session.uid && req.session.role === 'user') {
                res.status(200).send(generateHtml(unauthorizedUser, req))
            } else { next() }
        } else { next() } 
    } else { next() } 
}

module.exports = checkAuthState