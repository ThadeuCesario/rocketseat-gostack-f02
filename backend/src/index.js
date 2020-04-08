const express = require('express');

const app = express();

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
app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2'
  ]);
});

app.post('/projects', (request, response) =>{
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
  return([
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