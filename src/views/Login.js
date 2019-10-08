import React, { Component } from 'react';
import { TextField, Grid, Container, Button } from '@material-ui/core'
import logo from '../logo.svg';
import '../Login.css';


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
                    <Grid container direction="row" justify="center"alignItems="center">
                        <TextField id="login" label="E-mail" required placeholder="teste@gmail.com.br" type="email" variant="outlined" className="InputLogin"/>
                        
                    </Grid>
                    <br></br>
                    <Grid container direction="row" justify="center"alignItems="center">
                        <TextField id="senha" label="Senha" required type="password" variant="outlined" className="InputLogin"/>
                    </Grid>
                    
                    <br></br>

                    <Grid xs="12" container direction="row" justify="center"alignItems="center" className="gridButtonLogin">
                        <Grid xs="6" direction="row" justify="center"alignItems="center" className="ButtonLogin" >
                            <Button variant="contained" onClick={() => this.entrarClick()} className="test" color="primary">Entrar</Button>
                        </Grid>
                        <Grid xs="6" direction="row"justify="center"alignItems="center">
                            <Button  variant="contained" color="secondary" >Cadastrar</Button>
                        </Grid> 
                    </Grid>
                    <br></br>
                    <a href='/recuperarSenha'>Esqueci minha senha</a> 
                </Grid>    
            </form>
            </Container>
       
        );
    }
}

export default Login;