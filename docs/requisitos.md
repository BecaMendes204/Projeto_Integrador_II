# Documento de requisitos

## Descrição do projeto

**O Sistema de Identificação de Dificuldades nas Disciplinas** será uma aplicação destinada a auxiliar na identificação e no acompanhamento de conteúdos que apresentam maior dificuldade para os alunos. O sistema deverá permitir que estudantes registrem suas dificuldades em determinadas disciplinas e conteúdos. Essas informações serão organizadas para que professores possam visualizar os assuntos que apresentam maior necessidade de atenção.

## Solução proposta

Desenvolver um sistema que permita aos alunos registrar as disciplinas e conteúdos em que apresentam dificuldades. As informações serão organizadas e apresentadas aos professores por meio de indicadores, facilitando a identificação dos assuntos que precisam de maior atenção e auxiliando no planejamento de revisões e atividades.

## Requisitos funcionais

### RF01 - Consultar disciplinas
O sistema deverá permitir que o usuário consulte as disciplinas disponíveis para registro e acompanhamento das dificuldades.

### RF02 - Consultar conteúdos
O sistema deverá permitir a visualização dos conteúdos relacionados a cada disciplina.

### RF03 - Registrar dificuldade
O sistema deverá permitir que o aluno registre uma dificuldade relacionada a uma disciplina ou conteúdo específico.

### RF04 - Alterar registro
O sistema deverá permitir que o aluno altere um registro de dificuldade realizado anteriormente, quando necessário.

### RF05 - Consultar dificuldades
O sistema deverá permitir que os usuários autorizados consultem as dificuldades registradas pelos alunos.

### RF06 - Identificar conteúdos com maior dificuldade
O sistema deverá organizar os registros realizados pelos alunos e permitir a identificação dos conteúdos que apresentam maior quantidade de dificuldades registradas.

### RF07 - Visualizar indicadores
O sistema deverá apresentar indicadores relacionados às dificuldades identificadas, podendo utilizar números, porcentagens ou gráficos para facilitar a interpretação dos dados.

### RF08 - Filtrar informações
O sistema deverá permitir a aplicação de filtros para facilitar a consulta dos dados.

### RF09 - Gerenciar disciplinas e conteúdos
O administrador ou usuário autorizado deverá poder cadastrar, alterar e remover disciplinas e seus respectivos conteúdos.

### RF10 - Gerenciar usuários
O sistema deverá permitir o gerenciamento dos usuários de acordo com seus respectivos perfis de acesso.

## Requisitos não funcionais

### RNF01 - Usabilidade
O sistema deverá possuir uma interface simples e intuitiva, permitindo que os alunos registrem suas dificuldades sem encontrar dificuldades durante a utilização.

### RNF02 - Resposividade
A interface deverá se adaptar a diferentes tamanhos de tela, possibilitando a utilização do sistema em computadores, tablets e dispositivos móveis.

### RNF03 - Desempenho
O sistema deverá apresentar as informações e resultados das consultas em tempo adequado, evitando carregamentos desnecessariamente longos.

### RNF04 - Segurança
O sistema deverá controlar o acesso às informações de acordo com o perfil de cada usuário.

### RNF05 - Privacidade
As informações relacionadas aos registros dos alunos deverão ser protegidas e utilizadas somente para as finalidades previstas pelo sistema.

### RNF06 - Organização
As informações deverão ser apresentadas de maneira organizada, utilizando categorias, filtros e indicadores que facilitem sua interpretação.

### RNF07 - Manutenibilidade
O sistema deverá possuir uma estrutura organizada que facilite a realização de correções, atualizações e inclusão de novas funcionalidades.

## Usuários do sitema

### Aluno
O aluno será responsável por informar suas dificuldades nas disciplinas.
Principais ações:
- Consultar disciplinas;
- Consultar conteúdos;
- Registrar dificuldades;
- Informar o nível de dificuldade;
- Descrever dúvidas ou dificuldades;
- Alterar seus próprios registros;
- Consultar seus registros anteriores.
  
### Professor
O professor poderá consultar os dados relacionados às dificuldades dos alunos de suas disciplinas.
Principais ações:
- Consultar dificuldades;
- Visualizar conteúdos com maior índice de dificuldade;
- Filtrar informações;
- Visualizar indicadores;
- Acompanhar a evolução das dificuldades.

### Administrador
O administrador será responsável pela manutenção das informações e pelo gerenciamento do sistema.
Principais ações:
- Cadastrar disciplinas;
- Cadastrar conteúdos;
- Alterar informações;
- Remover informações;
- Gerenciar usuários;
- Gerenciar permissões de acesso.

