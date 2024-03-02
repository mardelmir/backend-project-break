const { initializeApp } = require('firebase/app')
const { getAuth, connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } = require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyAuSNiDGqn3ccmVRxuYy67mElKNVjJy820",
  authDomain: "backend-pb-a3c33.firebaseapp.com",
  projectId: "backend-pb-a3c33",
  storageBucket: "backend-pb-a3c33.appspot.com",
  messagingSenderId: "79801301256",
  appId: "1:79801301256:web:8be93883d88542807a94bd"
};

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

// Emulador
connectAuthEmulator(auth, 'http://localhost:9099') // en terminal: firebase emulators:start --only auth


// Log in Form con loginBtn -> onclick="loginEmailPassword()"
const loginEmailPassword = async () => {
  const loginEmail = emailInput.value // modificar
  const loginPassword = passwordInput.value // modificar

  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(userCredential.user)

  }
  catch (error) {
    console.log(error)
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      // HTML `Contraseña icorrecta, inténtalo de nuevo`
    } else {
      // HTML `Error: ${error.message}`
    }

  }
}

// Sign in Form con signinBtn -> onclick="createAccount()"
const createAccount = async () => {
  const signinEmail = emailInput.value
  const signinPassword = passwordInput.value
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, signinEmail, signinPassword)
    console.log(userCredential.user)
    
  }
  catch (error) {
    console.log(error)
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      // HTML `Contraseña icorrecta, inténtalo de nuevo`
    } else {
      // HTML `Error: ${error.message}`
    }
    
  }
}

// Saber si está logado o no, ¿esto lo puedo hacer con req.session?
const monitorAuthState = async () => {
  await onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user) // está logado
    } else {
      // HTML `No estás logado`
    }
  })
}
// monitorAuthState()

// Nav con logoutBtn -> onclick="logout()"
const logout = async () => await signOut(auth)