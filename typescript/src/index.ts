/**
 * Quando devemos adicionar ou não tipagem?
 * 
 * Vamos analisar o caso das variáveis de 'request' e 'response'. Porque que quando trabalhamos
 * com elá já está ocorrendo o intellisense normalmente? 
 * Isso ocorre porque no mesmo arquivo que estou trabalhando com o express, está ocorrendo
 * a declaração desse arquivo. 
 * Então veja que eu tenho o 'import' do express logo no começo. 
 * Se não fosse por isso, eu precisaria realizar a tipagem.
 * 
 * Quando instalamos o express, também instalamos um pacote chamado '@types/express'
 * esse arquivo podemos chamar de definição de tipos do nosso pacote express.
 * 
 * Para testar as tipagens, vamos imaginar que nosso request e response, esteja definido 
 * em outro arquivo.
 */

import express from 'express';
import {callRoute} from './route';

const app = express();

app.get('/', callRoute);

app.listen(3333); 






 