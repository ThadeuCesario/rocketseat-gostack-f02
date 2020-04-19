/**
 * Veja que dentro do contexto desse arquivo, não há a importação do express.
 * Por isso o 'request' e 'response' não geram retorno com o ctrl + space.
 * 
 * Mas não basta importar o express, pois estavamos trabalhando com um app e depois com
 * o método GET. Então tudo o que utilizamos dentro da lib já estará tipado desde que
 * esteja importado. Porém nesse caso, não estamos utilizando nenhum método 'GET', 'POST'
 * 'DELETE', 'PUT' a função não será criada para nós.
 * 
 * Então precisamos importart as tipagem do express, e em seguida precisamos referenciar
 * dentro de nossa função. 
 * Agora depois que realizamos a tipagem, podemos testar nosso json e estara com as sugestões
 * de função.
 */

import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function callRoute(request: Request, response: Response){
  const user = createUser('Teste', 'teste@teste.com.br', '123456789');
  return response.json({message: 'Hello World'})
}