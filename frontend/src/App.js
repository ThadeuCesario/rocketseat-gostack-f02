import React from 'react';
import Header from './components/Header';

function App(){
  return(
    <React.Fragment>
      <Header title="HomePage">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </React.Fragment>
  );
}

export default App;  