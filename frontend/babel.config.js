/**
 * Configurações relacionadas ao Babel.
 * Lembrando que o código será transpilado para um código interpretável pelo browser. 
 * 
 * Iniciamente vamos criar um module.exports e inserir um presets.
 * Presets são conjuntos de configurações criadas por terceiros, que podemos 
 * aproveitar em nossa aplicação.
 * 
 * Inicialmente vamos colocar duas configurações o 
 * '@babel/preset-env' e o '@babel/preset-react'.
 * 
 *    @babel/preset-env:
 *      O @babel/preset-env, será responsável por converter o código de um javascript mais moderno
 *      para um javascript um pouco mais antigo. Porém baseado no ambiente da nossa aplicação.
 *      Por examplo imagine que estamos convertendo um código para ser executado na web (browser), essa 
 *      funcionalidade vai fazer uma varredura nos browsers para entender quais funcionalidades elas ainda 
 *      não entendem e depois vão transpilar somente essas funcionalidades que os browsers ainda não entendem.
 *      Podemos utilizar essa funcionalide '@babel/preset-env' no Node, só que o Node já conhece muito mais
 *      funcionalidades que o próprio browser (já possui suporte para async await, já tem suporte para generators...)
 *      sendo que nesse caso o babel iria analisar funcionalidades que o Node não entenderia.
 *      Então esse '@babel/preset-env' analisará o ambiente que sua aplicação está sendo executada e converterá
 *      o código apenas baseado no ambiente.
 *      Podemos inclusive forçar para que analise navegadores como o Internet Explorer 10. 
 * 
 * 
 *    @babel/preset-react
 *      O @babel/preset-react, será responsável por inserir as funcionalidades do React nessa conversão.
 *      Como sabemos o React tem arquivos JSX que injetam conteúdo HTML dentro de código Javascript.
 *      Sendo que o @babel/preset-react será responsável por pegar o código React e converter para um
 *      código que o browser entenda.
 */

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}