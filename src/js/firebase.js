console.log("firebase.js carregado!");
// Aqui conectamos nosso projeto ao Firebase.
// Usamos os módulos direto da internet (CDN), sem precisar instalar nada com npm.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// COLE AQUI a configuração que você copiou do painel do Firebase
// (Configurações do projeto > Geral > Seus aplicativos)
const firebaseConfig = {
  apiKey: "AIzaSyDoBEiKr25xmq2fvpe9Uu0WY3W4wIUEPak",
  authDomain: "sistema-de-dificuldades.firebaseapp.com",
  projectId: "sistema-de-dificuldades",
  storageBucket: "sistema-de-dificuldades.firebasestorage.app",
  messagingSenderId: "232060986210",
  appId: "1:232060986210:web:2d6965ef7d2a1f2d94823b"
};

// Inicializa o Firebase com essa configuração
const app = initializeApp(firebaseConfig);

// Cria as referências que vamos usar em outros arquivos JS
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase conectado com sucesso!");
console.log("Auth:", auth);
console.log("DB:", db);

// Exportamos "auth" e "db" para que login.js, aluno.js e professor.js
// possam usar sem precisar configurar o Firebase de novo
export { auth, db };