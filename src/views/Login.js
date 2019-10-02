import React, { Component } from 'react';
import { TextField, Grid, Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';
import './Login.css';


class Login extends Component {
    state = {
        mensagem:'Favor informar o login'
    }
    
    entrarClick = () => {
        alert("teste, click no botão");
        this.setState({mensagem:'Login inválido'
            
        });
    }
    
    render() {
        const {mensagem} = this.state;
        return (
            <Container maxWidth="sm" className="cont">
        
            <div>
                <img src={logo} className="logo-img"  alt="logo"/>
            </div>
            <h1>Carona Fácil</h1>
            <p>{mensagem}</p>    
             <form>
                 <Grid container direction="column">    
                    <TextField
                        id="login"
                        label="E-mail"
                         required
                         placeholder="teste@gmail.com.br"
                          type="email"
                    />
                    <TextField
                        id="senha"
                        label="Senha"
                        required
                        type="password"
                        
                    />
                    <br></br>
                    <Button variant="contained" onClick={() => this.entrarClick()} className="test" color="primary" >Entrar</Button>
                      <br></br>
                    <Button  variant="contained" color="secondary" >Cadastrar</Button>
                        <br></br>
                    <a href="">Esqueci minha senha</a>    
                    
                </Grid>    
            </form>
            </Container>
       
        );
    }


}

export default Login;