// login.js - cuida do login e descobre se o usuário é aluno ou professor
console.log("login.js carregado!");

import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("form-login");
const mensagemErro = document.getElementById("mensagem-erro");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // impede o recarregamento normal da página
  mensagemErro.textContent = "";

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    // 1. Faz login no Firebase Authentication
    const credencial = await signInWithEmailAndPassword(auth, email, senha);
    const uid = credencial.user.uid;

    console.log("E-mail logado:", credencial.user.email);
    console.log("UID do usuário logado:", uid);
    console.log("Caminho procurado no Firestore:", `usuarios/${uid}`);

    // 2. Busca o perfil desse usuário na coleção "usuarios" do Firestore
    const referenciaUsuario = doc(db, "usuarios", uid);
    const snapshot = await getDoc(referenciaUsuario);

    console.log("Caminho do documento:", referenciaUsuario.path);
    console.log("Documento existe?", snapshot.exists());
    console.log("Dados encontrados:", snapshot.data());

    if (!snapshot.exists()) {
      mensagemErro.textContent = "Login feito, mas este usuário não tem perfil cadastrado no Firestore.";
      return;
    }

    const dadosUsuario = snapshot.data();

    // 3. Redireciona de acordo com o perfil
    if (dadosUsuario.perfil === "aluno") {
      window.location.href = "aluno.html";
    } else if (dadosUsuario.perfil === "professor") {
      window.location.href = "professor.html";
    } else {
      mensagemErro.textContent = "Perfil desconhecido: " + dadosUsuario.perfil;
    }

  } catch (erro) {
    console.error(erro);
    mensagemErro.textContent = "E-mail ou senha inválidos.";
  }
});