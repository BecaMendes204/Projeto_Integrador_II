// professor.js - visualizar todos os registros, filtrar e ver indicadores

import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const tabela = document.getElementById("corpo-tabela");
const totalSpan = document.getElementById("total-dificuldades");
const disciplinaTopSpan = document.getElementById("disciplina-top");
const conteudoTopSpan = document.getElementById("conteudo-top");
const filtroDisciplina = document.getElementById("filtro-disciplina");
const btnSair = document.getElementById("btn-sair");

let todosRegistros = [];

onAuthStateChanged(auth, (usuario) => {
  if (!usuario) {
    window.location.href = "index.html";
    return;
  }
  carregarRegistros();
});

btnSair.addEventListener("click", () => {
  signOut(auth).then(() => window.location.href = "index.html");
});

// Escuta TODOS os registros da coleção "dificuldades" em tempo real
function carregarRegistros() {
  onSnapshot(collection(db, "dificuldades"), (snapshot) => {
    todosRegistros = [];
    snapshot.forEach((docSnap) => {
      todosRegistros.push(docSnap.data());
    });
    preencherFiltro();
    renderizar();
  });
}

// Monta as opções do filtro com as disciplinas que existem nos registros
function preencherFiltro() {
  const disciplinas = [...new Set(todosRegistros.map((r) => r.disciplina))];

  filtroDisciplina.innerHTML = `<option value="todas">Todas</option>`;
  disciplinas.forEach((disciplina) => {
    filtroDisciplina.innerHTML += `<option value="${disciplina}">${disciplina}</option>`;
  });
}

filtroDisciplina.addEventListener("change", renderizar);

// Desenha a tabela e os indicadores na tela
function renderizar() {
  const filtro = filtroDisciplina.value;
  const registrosFiltrados =
    !filtro || filtro === "todas"
      ? todosRegistros
      : todosRegistros.filter((r) => r.disciplina === filtro);

  tabela.innerHTML = "";
  registrosFiltrados.forEach((r) => {
    tabela.innerHTML += `
      <tr>
        <td>${r.disciplina}</td>
        <td>${r.conteudo}</td>
        <td>${r.nivel}</td>
        <td>${r.descricao}</td>
      </tr>
    `;
  });

  // Indicadores sempre considerando TODOS os registros (não só o filtro atual)
  totalSpan.textContent = todosRegistros.length;
  disciplinaTopSpan.textContent = calcularMaisFrequente(todosRegistros, "disciplina");
  conteudoTopSpan.textContent = calcularMaisFrequente(todosRegistros, "conteudo");
}

// Conta quantas vezes cada valor aparece e devolve o mais frequente
function calcularMaisFrequente(lista, campo) {
  if (lista.length === 0) return "-";

  const contagem = {};
  lista.forEach((item) => {
    contagem[item[campo]] = (contagem[item[campo]] || 0) + 1;
  });

  return Object.entries(contagem).sort((a, b) => b[1] - a[1])[0][0];
}