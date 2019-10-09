import React, { Component } from 'react';
import { TextField, Grid, Container, Button } from '@material-ui/core'
import logo from './unnamed.png';
import './Login.css';

class Login extends Component {
    state = {
        mensagem: 'Favor informar o login'
    }

    entrarClick = () => {
        const {login, senha} = this.state;
        
        //alert("teste, click no botão");
        
        if(login === 'admin' && senha === '123'){
            this.props.onLogin();
        }
        else{
            this.setState({
               mensagem: 'Login inválido' 
            });
        }
    
        
    }

    render() {
        const { mensagem } = this.state;
        return (
            <Container maxWidth="sm" className="cont">
            <div>
                <img src={logo} className="logo-img"  alt="logo"/>
            </div>
            <p>{mensagem}</p>    
             <form>
                 <Grid container direction="column">    
                    <TextField
                        id="login"
                        label="E-mail"
                         required
                         placeholder="teste@gmail.com.br"
                          type="email"
                          variant="outlined"
                          onChange={(e) => this.setState({login: e.target.value})}
                    />
                    <TextField
                        id="senha"
                        label="Senha"
                        required
                        type="password"
                        variant="outlined"
                        onChange={(e) => this.setState({senha: e.target.value})}
                    />
                    <br></br>
                    <Button id="entrar" variant="contained" onClick={() => this.entrarClick()} >Entrar</Button>
                      <br></br>
                    <Button id="cadastrar" variant="contained" >Cadastrar</Button>
                        <br></br>
                    <a href='./recuperarSenha' >Esqueci Minha Senha</a>
                </Grid>    
            </form>
            </Container>

        );
    }
}

export default Login;
