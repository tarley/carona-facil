import React, {Component} from 'react';
import './App.css';
import Login from './views/Login';
import RecuperarSenha from './views/RecuperarSenha';
import Cadastro from './views/Cadastro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
