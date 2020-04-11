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
 */

import React from 'react';
import {render} from 'react-dom';
import App from './App';

render(<App />, document.getElementById('app'));