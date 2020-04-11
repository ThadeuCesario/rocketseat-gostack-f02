/**
 * O que o webpack irá fazer que o babel não consegue fazer? 
 * 
 * O Babel é responsável por transpilar arquivos javascript para que os browsers possam interpretar corretamente.
 * Porém dentro de arquivos javascript do React, podemos importar arquivos CSS, arquivos de imagem, arquivos JSON
 * e outros, o webpack será responsável por identificar o tipo de arquivo que está sendo solicitado
 * e acionar um loader.
 * 
 * Esse arquivo de config do webpack será executado pelo próprio Node, então podemos usar os módulos do Node.
 * Como por exemplo o 'path'.
 * 
 * Configurações do webpack.config. 
 *    entry => Primeiro arquivo a ser interpretado.
 *    output => Qual o arquivo gerado após a transpilação.
 * 
 * A primeira configuração estamos tratando os arquivos javascript. Basicamente estamos configurando para que 
 * seja realizado a transpilação utilizando o babel-loader de todo arquivo que termina com '.js' e que NÃO
 * esteja dentro da pasta node_modules.
 */

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}