import React, { Component } from 'react';
import { TextField, Grid, Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import logo from './unnamed.png';
import './Login.css';

class RecuperarSenha extends Component {
    render() {
        return(
            <Container maxWidth="sm" className="cont2">
            <div>
                <img src={logo} className="logo-img"  alt="logo"/>
            </div>
            <form>
                <h1 id="texto">RECUPERAR SENHA</h1>
                <Grid container direction="column">
                    <TextField 
                        id="senhanew"
                        label=" Nova Senha"
                        required
                        type="password"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        id="senhanewconfirm"
                        label=" Confirme Nova Senha"
                        required
                        type="password"
                        variant="outlined"
                    />
                    <br />
                    <Button id="salvar" variant="contained">Salvar</Button>
                </Grid>
            </form>
            </Container>
            );
        
    }
}

export default RecuperarSenha;