const express = require('express');
const {uuid} = require('uuidv4'); //Responsável por criar um id único universal.
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

  /**
   * Middleware:
   * Interceptador de requisições.
   * Podendo interromper totalmente uma requisição ou alterar dados da requisição.
   * O middleware agirá enquanto nossas requisições estão chegando e pode agir
   * antes que a resposta seja retornada para o usuário.
   * 
   * Vamos utilizar um middleware quando queremos que um trecho de código seja 
   * disparado em uma ou mais rotas de nossa aplicação.
   */

const projects = [];

function logRequests(request, response, next){
  /**
   * Esse middleware será disparado por todas as requisições para informar
   * a rota que está sendo utilizada.
   */

  const {method, url} = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.log(logLabel);

  /**
   * Precisamos chamar o 'next()', caso contrário o proximo middleware
   * não será disparado. 
   */ 
  return next(); 
}  

function middlewareTest(request, response, next){
  console.log('Middleware teste somente para POST');
  return next();
}

app.use(logRequests);

app.get('/projects', (request, response) => {
  /**
   * Tudo o que está dentro do request.query estão sendo enviados.
   */
  const {title} = request.query;
  const results = title ? projects.filter(project => project.title.includes(title)) : projects;

  return response.json(results);
});

app.post('/projects', middlewareTest, (request, response) =>{
  /**
   * Para obtermos os dados do corpo da requisição basta:
   *   const body = request.body;
   *   console.log(body);
   * Mas cuidado, por padrão o express não interpreta as informações através de Json.
   * Para que o express possa retornar json, utilizamos: 
   * app.use(express.json());
   */

  const {title, owner} = request.body;
  // console.log(title);
  // console.log(owner);
  const project = {id: uuid(), title, owner} 
  projects.push(project); 

  return response.json(project);
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
  const {title, owner} = request.body;
  // console.log(id);

  /**
   * Abaixo estamos utilizando uma função find para percorrer um array executando
   * uma função.
   * No caso, estamos comparando cada project.id, com nosso id desestruturado.
   * se eles forem iguais retornará true.
   * 
   * Alteramos para projectIndex, pois com a posição do projeto ficará mais fácil
   * para atualizar a informação.
   */
  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0){
    //Se não encontrou o índice, retornará -1 (menor do que zero)
    //Veja que estou alterando também o status do servidor.

    return response.status(400).json({ error: 'Project not found.'});
  }

  /**
   * Agora vamos atualizar os dados, criando um novo objeto 'project'
   * e logo abaixo acessamos o array passando o projectIndex no indíce 
   * e alterando pelo project novo.
   */

  const project = {
    id,
    title,
    owner
  };

  projects[projectIndex] = project;

  return response.json(project);
});

/**
 * No caso do 'DELETE' o procedimento é o mesmo. Devemos excluir passando
 * um 'id' como parâmetro.
 */
app.delete('/projects/:id', (request, response) => {
  const {id} = request.params;
  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0){
    //Se não encontrou o índice, retornará -1 (menor do que zero)
    //Veja que estou alterando também o status do servidor.

    return response.status(400).json({ error: 'Project not found.'});
  }

  projects.splice(projectIndex, 1);
  return response.status(204).send();
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