const firebaseApp = require('../config/firebase')
const { getAuth, connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } = require('firebase/auth')
const auth = getAuth(firebaseApp)
const { generateHtml } = require('../utils/helperFunctions')

const authController = {
    getLoginForm(req, res) {
        try {
            const loginForm = ` 
            <h1>Iniciar sesión</h1>
            <form class="form" id="loginForm" action="/shop/login" method="post"">
                <label for="emailId">Email:</label>
                <input type="email" id="emailId" name="email" required>

                <label for="passId">Contraseña:</label>
                <input type="password" id="passId" name="password" required>

                <div class="btn-container">
                    <button class="formBtn" type="submit">Login</button>
                    <a class="formBtn" href="/shop/register">Registrarse</a>
                    <a class="formBtn" href="/shop/products">Volver</a>
                </div>
            </form>`

            const html = generateHtml(loginForm)
            res.status(200).send(html)
        }
        catch (error) {
            console.log(error)
            res.status(500).send('Error: Could not get New Product Form')
        }
    },

    async loginEmailPassword(req, res) {
        const loginEmail = req.body.email
        const loginPassword = req.body.password

        try {
            // const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            // console.log(userCredential.user)
        }
        catch (error) {
            console.log(error)
            if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
                // HTML `Contraseña icorrecta, inténtalo de nuevo`
            } else {
                // HTML `Error: ${error.message}`
            }
        }
    },

    getRegisterForm(req, res) {
        try {
            const registerForm = ` 
            <h1>Registro</h1>
            <form class="form" id="registerForm" action="/shop/register" method="post"">
                <label for="emailId">Email:</label>
                <input type="email" id="emailId" name="email" required>

                <label for="passId">Contraseña:</label>
                <input type="password" id="passId" name="password" required>

                <div class="admin">
                    <label for="adminId">Administrador</label>
                    <input type="checkbox" id="adminId" name="admin">
                </div>
                
                <div class="btn-container">
                    <button class="formBtn" type="submit">Registrarse</button>
                    <a class="formBtn" href="/shop/login">Login</a>
                    <a class="formBtn" href="/shop/products">Volver</a>
                </div>
            </form>`

            const html = generateHtml(registerForm)
            res.status(200).send(html)
        }
        catch (error) {
            console.log(error)
            res.status(500).send('Error: Could not get New Product Form')
        }
    },

    async createAccount(req, res) {
        const regEmail = emailInput.value
        const regPassword = passwordInput.value
    
        // try {
        //     const userCredential = await createUserWithEmailAndPassword(auth, regEmail, regPassword)
        //     console.log(userCredential.user)
    
        // }
        // catch (error) {
        //     console.log(error)
        //     if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        //         // HTML `Contraseña icorrecta, inténtalo de nuevo`
        //     } else {
        //         // HTML `Error: ${error.message}`
        //     }
        // }
    },

    async logout(req, res) {
        await signOut(auth)
        res.redirect('/shop/products')
    }
}

module.exports = authController





// Emulador
connectAuthEmulator(auth, 'http://localhost:9099') // en terminal: firebase emulators:start --only auth


// Saber si está logado o no, ¿esto lo puedo hacer con req.session?
// const monitorAuthState = async () => {
//     await onAuthStateChanged(auth, user => {
//         if (user) {
//             console.log(user) // está logado
//         } else {
//             // HTML `No estás logado`
//         }
//     })
// }
// monitorAuthState()

// // Nav con logoutBtn -> onclick="logout()"
// const logout = async () => await signOut(auth)