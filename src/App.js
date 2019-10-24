import React, { Component } from 'react';
import {withRouter} from 'react-router';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './views/Login';
import Home from './views/Home';
import Cadastro from './views/Cadastro';

//import RecuperarSenha from './views/RecuperarSenha';


class App extends Component {
  state = {
    isAuthenticated: false
  }
  
  authenticated(){
    this.setState({ isAuthenticated: true})
    this.props.history.push('/');
  }
  
  render() {
    const{isAuthenticated} = this.state;
    
    if(!isAuthenticated)
    return(
      <div className="App">
        <Login onLogin={() => this.authenticated()}/>
      </div>
    );
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/usuario'>
            <Cadastro/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
