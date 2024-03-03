const { initializeApp } = require('firebase/app')

const firebaseConfig = {
  apiKey: "AIzaSyAuSNiDGqn3ccmVRxuYy67mElKNVjJy820",
  authDomain: "backend-pb-a3c33.firebaseapp.com",
  projectId: "backend-pb-a3c33",
  storageBucket: "backend-pb-a3c33.appspot.com",
  messagingSenderId: "79801301256",
  appId: "1:79801301256:web:8be93883d88542807a94bd"
};

const firebaseApp = initializeApp(firebaseConfig)

module.exports = firebaseApp