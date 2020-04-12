/**
 * Babel: Converter (transpilar) código do React para um código que o o browser entenda.
 * 
 * Webpack: Para  cada tipo de arquivo (.js, .css, .png), será convertido o código de uma
 * forma diferente.
 * 
 * Loaders: babel-loader, css-loader, image-loader. Todos os pacotes que tem esse sufixo
 * 'loader' podemos interpretar que será um pacote utilizado pelo webpack.
 * 
 * JSX => HTML dentro do Javascript  (Javascript XML)
 * 
 * Sempre que criamos um componente do react, utilizamos com letra maiúscula. Por exemplo: App.js
 * O React é baseado em componentização.
 * 
 * Para utilizar o Fragment do React, podemos utilizar da seguinte forma:
 *    <React.Fragment></React.Fragment>
 *                   OU
 *                  <></>
 * 
 * Os três conceitos mais importantes do React são:
 *  - Componentes
 *  - Propriedade
 *  - Estado e Imutabilidade
 * 
 * * Propriedade é alguma informação que podemos passar de um componente pai, para um componente filho.
 *    props -> Todas as propriedades que são passadas como parâmetro
 *    children -> Todo o conteúdo que nossa tag recebeu. Toda vez que acessarmos props.children, queremos exibir o conteúdo
 *                que está dentro de nosso componente.
 * 
 * Para percorrermos um elemento no React utilizaremos a função map do Javascript.
 * 
 * Porque temos dois loaders para css (style-loader e css-loader)? 
 * O CSS-LOADER será responsável por ler nossos arquivos css e também por interpretar as importações que temos. Como background: url()... 
 * O STYLE-LOADER será responsável por pegar o arquivo interpretado pelo CSS-LOADER e irá injetar dentro do nosso HTML.
 * 
 * Instalamos também o file-loader (yarn add file-loader), esse será responsável por carregar arquivos dentro da nossa aplicação.
 */

import React from 'react';
import {render} from 'react-dom';
import App from './App';

render(<App />, document.getElementById('app'));