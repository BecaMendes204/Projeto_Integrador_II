// aluno.js - registrar dificuldades e gerenciar os próprios registros

import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  collection, addDoc, query, where, orderBy, onSnapshot,
  doc, updateDoc, deleteDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("form-dificuldade");
const listaDiv = document.getElementById("lista-registros");
const btnSair = document.getElementById("btn-sair");

let usuarioAtual = null;

// Se não estiver logado, volta para o login. Se estiver, carrega os registros dele.
onAuthStateChanged(auth, (usuario) => {
  if (!usuario) {
    window.location.href = "index.html";
    return;
  }
  usuarioAtual = usuario;
  carregarRegistros();
});

btnSair.addEventListener("click", () => {
  signOut(auth).then(() => window.location.href = "index.html");
});

// Registrar uma nova dificuldade
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const disciplina = document.getElementById("disciplina").value;
  const conteudo = document.getElementById("conteudo").value;
  const nivel = document.getElementById("nivel").value;
  const descricao = document.getElementById("descricao").value;

  await addDoc(collection(db, "dificuldades"), {
    disciplina,
    conteudo,
    nivel,
    descricao,
    usuario: usuarioAtual.uid,
    data: serverTimestamp()
  });

  form.reset();
});

// Mostra em tempo real os registros do aluno logado (só os dele, por isso o "where")
function carregarRegistros() {
  const consulta = query(
    collection(db, "dificuldades"),
    where("usuario", "==", usuarioAtual.uid),
    orderBy("data", "desc")
  );

  onSnapshot(consulta, (snapshot) => {
    listaDiv.innerHTML = "";

    snapshot.forEach((docSnap) => {
      const dados = docSnap.data();
      const id = docSnap.id;

      const item = document.createElement("div");
      item.classList.add("registro");
      item.innerHTML = `
        <p><strong>Disciplina:</strong> ${dados.disciplina}</p>
        <p><strong>Conteúdo:</strong> ${dados.conteudo}</p>
        <p><strong>Nível:</strong> ${dados.nivel}</p>
        <p><strong>Descrição:</strong> ${dados.descricao}</p>
        <button class="btn-editar" data-id="${id}">Editar</button>
        <button class="btn-excluir" data-id="${id}">Excluir</button>
      `;
      listaDiv.appendChild(item);
    });

    ativarBotoes();
  });
}

function ativarBotoes() {
  document.querySelectorAll(".btn-excluir").forEach((botao) => {
    botao.addEventListener("click", async () => {
      const id = botao.getAttribute("data-id");
      const confirmar = confirm("Tem certeza que deseja excluir este registro?");
      if (confirmar) {
        await deleteDoc(doc(db, "dificuldades", id));
      }
    });
  });

  document.querySelectorAll(".btn-editar").forEach((botao) => {
    botao.addEventListener("click", async () => {
      const id = botao.getAttribute("data-id");
      const novaDescricao = prompt("Nova descrição da dificuldade:");
      if (novaDescricao) {
        await updateDoc(doc(db, "dificuldades", id), { descricao: novaDescricao });
      }
    });
  });
}