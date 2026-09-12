# Relatório de Testes — Etapa 3

Este documento registra os testes realizados no Sistema de Identificação de Dificuldades nas Disciplinas.


| # | Teste | Como foi testado | Resultado esperado | Resultado obtido | Correções necessárias |
|---|-------|-------------------|---------------------|-------------------|------------------------|
| 1 | Login com aluno | Login com `aluno.teste@gmail.com` na tela inicial | Redirecionamento para `aluno.html` | Login realizado com sucesso e redirecionamento para a área do aluno | Nenhuma |
| 2 | Login com professor | Login com `professor.teste@gmail.com` na tela inicial | Redirecionamento para `professor.html` | Login realizado com sucesso e redirecionamento para a área do professor | Nenhuma |
| 3 | Aluno registra dificuldade | Preencher e enviar o formulário na área do aluno | Dados salvos e formulário limpo | Dificuldade registrada com sucesso, os dados foram salvos e o formulário foi limpo após o envio | Nenhuma |
| 4 | Registro salvo no Firestore | Consultar coleção `dificuldades` no painel do Firebase | Documento novo aparece na coleção | Um novo documento foi criado corretamente na coleção dificuldades do Firestore | Nenhuma |
| 5 | Aluno visualiza registros | Recarregar a página `aluno.html` | Lista mostra os registros já feitos | Os registros realizados anteriormente foram exibidos corretamente na seção "Meus registros" | Nenhuma |
| 6 | Aluno altera registro | Clicar em "Editar" em um registro | Descrição atualizada na tela e no Firestore | A descrição foi alterada com sucesso e a atualização foi refletida na tela e no Firestore | Nenhuma |
| 7 | Aluno exclui registro | Clicar em "Excluir" em um registro | Registro removido da lista e do Firestore | O registro foi excluído com sucesso da lista e do Firestore | Nenhuma |
| 8 | Professor visualiza registros | Login como professor | Tabela mostra todos os registros de todos os alunos | A tabela exibiu corretamente os registros cadastrados pelos alunos | Nenhuma |
| 9 | Professor filtra registros | Selecionar uma disciplina no filtro | Tabela mostra apenas registros daquela disciplina | O filtro funcionou corretamente, exibindo somente os registros da disciplina selecionada | Nenhuma |
| 10 | Indicadores corretos | Comparar números da tela com a quantidade real de registros no Firestore | Total, disciplina e conteúdo mais frequentes corretos | Os indicadores apresentados na tela corresponderam aos dados existentes no Firestore | Nenhuma |

## Observações sobre os testes

- Os testes foram realizados manualmente, navegando pelo sistema, não sendo necessária a criação de testes automatizados, considerando o nível e o escopo deste projeto.
- O sistema também possui tratamento para erros de login, exibindo uma mensagem informativa quando são utilizados e-mail ou senha inválidos.
