import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import logoImage from './assets/react-logo.png';
import api from './services/api'

function App(){
  /**
   * O useState retorna um array com duas posições.
   *    Na primeira posição, retorna a variável com o seu valor inicial.
   *    Na segunda posição, é uma função para atualizarmos esse valor.
   * 
   * Devemos evitar no React qualquer método ou função que possa alterar o valor
   * original de um elemento. Pois isso fere a regra da imutabilidade que o React é
   * baseado.
   * Para que possamos alterar um valor, precisaremos realizar um clone do elemento.
   * 
   * A useEffect será utilizada para disparar funções.
   *   O useEffect recebe dois parâmetros, o primeiro parâmetro é qual função que eu quero disparar
   *   o segundo parâmetro, é quando que eu desejo disparar essa função. Se quiseremos que a função
   *   seja executada somente quando o elemento for exibido em tela. Basta colocar um array vazio [].
   * 
   *   Toda vez que inicializamos um estado, ou seja utilizamos o useState, definindo qual o valor 
   *   inicial do estado. É ideal colocar um valor inicial que vai seguir o mesmo tipo de variável
   *   que o estado terá futuramente. Por exemplo, meu projects sempre será um array, por isso
   *   iniciei o estado com um array vazio.
   */
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject(){
    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    // console.log(projects);

    const response = await api.post('projects', {
        title:`Novo Projeto ${Date.now()}`,
        owner:"Thadeu Munhóz Cesário"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return(
    <React.Fragment>
       <Header title="Projects"></Header>
        {/* <img width={300} src={logoImage}/> */}
       <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
       </ul>

       <button type="button" onClick={() => handleAddProject()}>Adicionar Projeto</button>
    </React.Fragment>
  );
}

export default App;  