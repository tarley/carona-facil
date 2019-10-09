import React, { Component } from 'react';
import './App.css';
import Login from './views/Login';
import Home from './views/Home';
import Cadastro from './views/Cadastro';

//import RecuperarSenha from './views/RecuperarSenha';


class App extends Component {
  state = {
    screen: 'login'
  }
  
  irPara(screen){
    this.setState({screen})
  }
  
  render() {
    const screen = this.state.screen;
    
    return (
      <div className="App">
        {screen === 'login' && <Login onLogin={() => this.irPara('home')}/>}
        {screen === 'home' && <Home/>}
        {screen === 'cadastroUsuario' && <Cadastro/>}
      </div>
    );
  }
}

export default App;
