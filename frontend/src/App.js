import React, { useState } from 'react';
import Header from './components/Header';

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
   */
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject(){
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    console.log(projects);
  }

  return(
    <React.Fragment>
       <Header title="Projects"></Header>

       <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
       </ul>

       <button type="button" onClick={() => handleAddProject()}>Adicionar Projeto</button>
    </React.Fragment>
  );
}

export default App;  