import React, {Component} from 'react';
import {AppBar, Toolbar , Container, Select, MenuItem} from '@material-ui/core';
import MaterialTable from 'material-table';

import {tableIcons} from '../utils/TableIcons';

const columns=[
    { title: 'Nome', field: 'nome' },
    { title: 'Origem', field: 'origem' },
    { title: 'Destino', field: 'destino' },
    ];
    
const data=[
    { nome: 'Inara', origem: 'Belo Horizonte', destino: 'Silva Lobo' },
    { nome: 'Pedro', origem: 'Contagem', destino: 'Buritis' },
    { nome: 'Stéphanie', origem: 'Betim', destino: 'Carlos Luz' },
    ];
    

class Home extends Component{
    render(){
        return(
            <div>
                <AppBar position = "relative">
                    <Toolbar>
                        <h1> Carona Fácil</h1>
                    </Toolbar>
                </AppBar>
                <main>
                    <Container maxWidht="sm">
                        <h1>Bem vindo ao Carona Fácil!</h1>
                        <p>
                            O Carona Fácil é um Sistema de transporte universitário pensado para facilitar a vida dos estudantes que necessitam de locomoção rápida, num momento que você mais precisa.
                            A faculdade é um divisor de águas na vida de todos os jovens.
                            É balada, é pressão, é cultura e falta de dinheiro. Por que não utilizar uma ajuda? 
                            Carona Fácil, vem para te salvar. Um transporte ágil e acessível que liga a quem precisa de carona e quem oferece! 
                            Com a Carona Fácil você vai mais longe, seguindo uma tendência mundial de sustentabilidade.
                        </p>
                    </Container>
                    <hr/>
                    <Container maxWidht="lg">
                        <MaterialTable
                            title="Para onde vai?"
                            columns={columns}
                            data={data}
                            icons={tableIcons}
                        />    
                    </Container>
                    
                </main>
                <footer>
                    <h2>Footer</h2>
                    <p>Todos os direitos reservados.</p>
                </footer>
            </div>
        )
    }
}

export default Home;