const express = require('express');

const app = express();

/**
 * O 'use' é quando queremos adicionar uma função em que todas as rotas deverão
 * passar por ela. Essa configuração precisa vir antes das rotas.
 */

app.use(express.json());
/**
 * Métodos HTTP:
 * GET -> Utilizado quando queremos buscar informações do back-end.
 * Ou seja quando estamos criando uma rota, com o intuito de retornar
 * alguma informação para o usuário, utilizamos o método GET.
 * 
 * POST -> Quando queremos criar alguma informação no back-end.
 * 
 * PUT/PATCH -> Quando queremos alterar alguma informação no back-end
 *  (PUT -> Atualização de algum recurso por completo)
 *  (PATCH -> Quando queremos atualizar alguma informação específica)
 * 
 * DELETE -> Quando queremos deletar alguma informação no back-end.
 */

/**
 * Temos abaixo o método GET, lembrando que com o Express podemos controlar rotas.
 * Para isso vamos utilizar o método 'get' do express. No primeiro parâmetro
 * temos a rota que estaremos trabalhando que no caso é a '/project'.
 * O segundo parâmetro é uma função. Veja que estou utilizando arrow function.
 * Essa função utiliza de dois parâmetros, sendo que o primeiro é a requisição
 * e o segundo é a resposta.
 * O return dessa função é sempre uma resposta. Temos várias formas de retornar
 * uma resposta. Porém a mais comum no início é o send().
 * 
 * O request guarda as informações da requisição que o usuário está fazendo. Por exemplo
 * quais são as rotas ou parâmetros.
 * 
 * Geralmente chamamos o caminho que vem logo após a barra de recurso. No caso o 'projects'
 * então o recurso é o projects.
 * As rotas devem ser únicas, mas tanto a ação quando o recurso. Isso quer dizer que
 * eu posso ter uma rota para 'POST' com o recurso 'projects' e uma rota para
 * 'GET' com o recurso 'projects' também.
 * 
 * Lembrando que pelo navegador não temos como acessar rotas do tipo:
 * POST, PUT ou DELETE
 * Por isso utilizaremos o Insomnia
 */

 /**
  * Tipos de parâmetros (parâmetros são formas do nosso cliente enviar algum tipo de
  * informação):
  * 
  * Query Params: Vamos utilizar principalmente para filtros e paginação. 
  *      exemplo: http://localhost:3333/projects/?title=React
  * Podemos anexar mais queries com '&'
  *     exemplo: http://localhost:3333/projects/?title=React&owner=Thadeu
  * O próprio insomnia possui uma funcionalidade para trabalhar com query params.
  * 
  * Route Params: Utilizaremos para identificar recursos (Atualizar ou deletar).
  *     exemplo: http://localhost:3333/projects/:id
  * 
  * Request Body: Conteúdo na hora de criar ou editar um recurso.
  * Imagine que no front end temos um formulários com uma série de informações.
  * Essas informações na hora de criar/deletar/alterar, pegaremos através do
  * request body. Essas informações chegam através de JSON.
  */
app.get('/projects', (request, response) => {
  /**
   * Tudo o que está dentro do request.query estão sendo enviados.
   */
  const {title, owner} = request.query;
  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2'
  ]);
});

app.post('/projects', (request, response) =>{
  /**
   * Para obtermos os dados do corpo da requisição basta:
   *   const body = request.body;
   *   console.log(body);
   * Mas cuidado, por padrão o express não interpreta as informações através de Json.
   * Para que o express possa retornar json, utilizamos: 
   * app.use(express.json());
   */

  const {title, owner} = request.body;
  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
});

/**
 * O método PUT é um pouco diferente. Por que o PUT, queremos atualizar o dado
 * de algum elemento em específico. Por isso, precisaremos passar algum identificador
 * único.
 * Isso quer dizer que toda vez que for identificado o método put para essa rota
 * será validado o id. Nossa rota seguirá +- o padrão abaixo:
 * http://localhost:3333/projects/2
 * No nosso caso o id é o número '2'.
 */

app.put('/projects/:id', (request, response) => {
  /**
   * Para obter o 'id' dentro do terminal, basta utilizar o 
   * request.params
   */

  const {id} = request.params;
  console.log(id);

  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3'
  ]);
});

/**
 * No caso do 'DELETE' o procedimento é o mesmo. Devemos excluir passando
 * um 'id' como parâmetro.
 */
app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3'
  ]);
})

/**
 * Com o App.listen, a aplicação estará em uma porta na qual podemos
 * acessar pelo localhost. Neste caso estará disponível na porta 3333.
 * 
 * Podemos ter como segundo parâmetro uma função que será acionada quando
 * o servidor for executado.
 */
app.listen(3333, () => {
  console.log('👾️  Back-end started! 🤖️')
}); 