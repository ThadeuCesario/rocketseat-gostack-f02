/**
 * Services devem exportar somente uma única funcionalidade.
 * 
 * Para criação de um usuário, vamos precisar dos seguintes dados:
 *  -Nome
 *  -Email
 *  -Senha
 * 
 * A função abaixo está informando 'any' nos parâmetros. 
 * Existem algumas formas para declarar a tipagem. Por exemplo: 
 * name = ""      -> Já sabemos que name é do tipo string
 * email: String  -> Também será uma string, porém definida de outra forma
 * 
 * Interface -> Quando estou aplicando uma desestruturação. Não posso utilizar 
 * diretamente o modo email: String, pois estamos trabalhando com objetos. 
 * Então para isso criamos uma variável separada, isso é a interface.
 * 
 * Veja no exemplo abaixo que criei uma interface para criação de um usuário.
 * 
 * Veja que defini o nome como não sendo obrigatório, utilizando o '?:'   
 * nome?: string;
 * 
 * Veja também que estou trabalhando com array no campo de 'techs', para trabalhar
 * com Arrays, basta chamar 'Array' e dentro das tags '<>' utilizar a tipagem.
 * Por exemplo nesse caso, são strings. Portanto: 
 * Array<string>
 */

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string>
}

export default function createUser({name = '', email, password}:CreateUserData){
  const user = {
    name,
    email,
    password
  }

  return user;
}