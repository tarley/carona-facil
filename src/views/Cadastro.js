import React, { Component } from 'react';
import { TextField, Grid, Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import logo from './unnamed.png';
import './Login.css';

class Cadastro extends Component {
    render () {
        return(
            <Container maxWidth="sm" className="cont3">
            <form>
             <div>
                <img src={logo} className="logo-img"  alt="logo"/>
            </div>
                <h1 id="cadastrotext">CADASTRO</h1>
                <Grid container direction="column">
                    <TextField
                        id="nome"
                        label="Nome"
                        required
                        type="name"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        id="emailCad"
                        label="Email"
                        required
                        type="email"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        id="RA"
                        label="Registro Academico (RA)"
                        required
                        type="texto"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        id="cpf"
                        label="CPF"
                        required
                        type="texto"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        id="senhaCad"
                        label="Senha"
                        required
                        type="password"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        id="confirmSenha"
                        label="Confirmar Senha"
                        required
                        type="password"
                        variant="outlined"
                    />
                    <br />
                    <Button id="cadastrar2" variant="contained">Cadastrar</Button>
                </Grid>
            </form>
            </Container>
            );
    }
}

export default Cadastro;