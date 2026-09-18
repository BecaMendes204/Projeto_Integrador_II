# Sistema de identificação de dificuldades nas disciplinas

## Sobre o projeto

O **Sistema de Identificação de Dificuldades nas Disciplinas** é uma proposta de sistema desenvolvida para auxiliar estudantes e professores na identificação de conteúdos que apresentam maior dificuldade durante o processo de aprendizagem. Em uma turma, nem todos os alunos possuem as mesmas dificuldades. Alguns podem apresentar problemas em determinados conteúdos, enquanto outros conseguem acompanhar a disciplina normalmente. Muitas vezes, essas dificuldades só são percebidas quando o aluno apresenta baixo desempenho em atividades ou avaliações. Pensando nesse problema, o projeto propõe um sistema capaz de coletar e organizar informações sobre as dificuldades dos alunos, permitindo identificar quais conteúdos ou disciplinas apresentam maiores índices de dificuldade.

## Problema

Professores e instituições podem ter dificuldade para identificar, de maneira rápida e organizada, quais conteúdos estão sendo mais difíceis para os alunos. Quando essas dificuldades não são percebidas inicialmente, o estudante pode acumular dúvidas e apresentar queda no desempenho acadêmico. Além disso, o professor pode não possuir informações suficientes para saber quais assuntos precisam de maior atenção ou revisão.

## Solução proposta

A solução consiste no desenvolvimento de um sistema que permita aos alunos **informar** quais conteúdos estão apresentando dificuldades. A partir dessas informações, o sistema poderá organizar os dados e apresentar indicadores que auxiliem professores e responsáveis pedagógicos a identificar os conteúdos que precisam de maior atenção.
O sistema poderá oferecer funcionalidades como:
- Registro de dificuldades em conteúdos;
- Consulta das disciplinas;
- Visualização dos conteúdos com maior índice de dificuldade;
- Acompanhamento das dificuldades ao longo do período;
- Identificação de conteúdos que necessitam de atenção;
- Consulta dos resultados pelos professores;
- Aplicação de questionários ou formulários;
- Registro de observações e informações complementares. 

  ## Público-alvo

O principal público-alvo do sistema são **alunos e professores da instituição**. Os alunos poderão informar quais disciplinas ou conteúdos estão apresentando dificuldades, contribuindo para que a instituição tenha uma visão mais clara das necessidades da turma. Já os professores poderão consultar os resultados e identificar quais conteúdos apresentam maior dificuldade entre os alunos, utilizando essas informações como apoio para o planejamento de revisões e atividades.

## Objetivos

O principal objetivo do sistema é facilitar a identificação de dificuldades de aprendizagem nas disciplinas, permitindo que problemas sejam percebidos antes que causem impactos maiores no desempenho dos estudantes. Com isso, espera-se identificar conteúdos que apresentam maior dificuldade, auxiliar professores no planejamento das aulas, permitir que os alunos expressem suas dificuldades, facilitar o acompanhamento das dificuldades, apoiar a criação de estratégias de revisão e contribuir para a melhoria do processo de aprendizagem.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro (sem frameworks)
- Firebase Authentication (login por e-mail/senha)
- Firebase Firestore (banco de dados)

## Como executar o projeto
O site já está publicado e pode ser acessado pelo link: https://becamendes204.github.io/Projeto_Integrador_II/

### Executando localmente
1. Clone este repositório.
2. Abra a pasta `src/` no VS Code.
3. Instale a extensão **Live Server** (se ainda não tiver).
4. Clique com o botão direito em `index.html` → **Open with Live Server**.
5. Faça login com um dos usuários de teste:
   - Aluno: `aluno.teste@gmail.com`; Senha: `12345678`
   - Professor: `professor.teste@gmail.com` Senha: `87654321`

> O projeto usa o Firebase já configurado em `src/js/firebase.js`. Não é necessário instalar nada com npm/Node.js.

## Funcionalidades

**Aluno**
- Registrar uma dificuldade (disciplina, conteúdo, nível, descrição)
- Visualizar seus próprios registros
- Editar e excluir registros

**Professor**
- Visualizar todos os registros feitos pelos alunos
- Filtrar registros por disciplina
- Visualizar indicadores: total de dificuldades, disciplina e conteúdo com mais dificuldades

## Estrutura do projeto

```
src/
├── index.html        (login)
├── aluno.html         (área do aluno)
├── professor.html     (área do professor)
├── css/
│   └── style.css
└── js/
    ├── firebase.js    (conexão com o Firebase)
    ├── login.js
    ├── aluno.js
    └── professor.js

docs/
├── requisitos.md      (Etapa 1)
├── arquitetura.md     (Etapa 2)
└── testes.md          (Etapa 3)
```

## Resultados finais

- Sistema funcional com login, registro de dificuldades, consulta, edição, exclusão e indicadores.
- Testes registrados em `docs/testes.md`.
- Release `v1.0.0` publicada com a versão final do sistema.
