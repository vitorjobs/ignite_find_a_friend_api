Nesse desafio desenvolveremos uma API para a adoção de animais, a FindAFriend API, utilizando SOLID e testes.

### Regras da aplicação

- [x] Deve ser possível se cadastrar como uma ORG (ONG)

- [x] Deve ser possível realizar login como uma ORG (ONG)
  - [x] Alterar banco de dados para receber senha
  - [x] Criar autenticação
  - [x] Gerar JWT

- [X] Deve ser possível cadastrar um pet (ONG) 
  - [x] Rota autenticada
  - [] Ajustar as campos que podem receber null na controller e no useCase
 
- Deve ser possível listar todos os pets disponíveis para adoção em uma cidade (Cliente)

- Deve ser possível filtrar pets por suas características (Cliente)

- Deve ser possível visualizar detalhes de um pet para adoção (Cliente)

### Regras de negócio

- Para listar os pets, obrigatoriamente precisamos informar a cidade (Cliente)
- [x] Uma ORG precisa ter um endereço e um número de WhatsApp (ONG)
- [x] Um pet deve estar ligado a uma ORG (ONG)
- O usuário que quer adotar, entrará em contato com a ORG via WhatsApp (Cliente)
- Todos os filtros, além da cidade, são opcionais (Cliente, exceto para listar pets)
- Para uma ORG acessar a aplicação como admin, ela precisa estar logada (ONG)

### Contexto da aplicação

É comum ao estar desenvolvendo uma API, imaginar como esses dados vão estar sendo utilizados pelo cliente web e/ou mobile.

Por isso, deixamos abaixo o link para o layout da aplicação que utilizaria essa API.

[Find A Friend (APP)](https://www.figma.com/community/file/1220006040435238030)

##

## Entrega

Após concluir o desafio, você deve enviar a URL do seu código no GitHub para a plataforma. 

Além disso, que tal fazer um post no LinkedIn compartilhando o seu aprendizado e contando como foi a experiência?

É uma excelente forma de demonstrar seus conhecimentos e atrair novas oportunidades!

Feito com 💜 por Rocketseat 👋

## Repositório de consulta

Antes de acessar o repositório com o desafio concluído, recomendamos fortemente que tente realizar o desafio.

Caso tenha dúvidas/dificuldades técnicas, temos o fórum para te ajudar.
(https://github.com/rocketseat-education/ignite-nodejs-03-api-solid-nodejs-challenge)