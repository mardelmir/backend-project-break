const firebaseApp = require('../config/firebase')
const { getAuth, onAuthStateChanged } = require('firebase/auth')
const auth = getAuth(firebaseApp)

async function checkAuthState(req, res, next) {
    onAuthStateChanged(auth, async user => {
        if (user) {
            const userToken = await user.getIdToken()
            return req.session.token === userToken ? next() : res.status(401).redirect('/shop/login')
        }
    })

    // const stateChanged = await onAuthStateChanged(auth, async user => {
    //     if (user) {
    //         const idToken = await user.getIdToken()
    //         return idToken === req.session.token ? loggedIn = true : loggedIn = false
    //     }
    // })
    // checkState === true ? next() : res.status(401).redirect('/shop/login')
   
    //return loggedIn === true ? next() : res.status(401).redirect('/shop/login')

}

module.exports = checkAuthState




// function useFirebaseToken() {
//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             user.getIdToken(true)
//                 .then(latestToken => setToken(latestToken))
//                 .catch(err => console.log(err))
//         }
//     })
//     return token
// }