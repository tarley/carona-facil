import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {AppBar, Toolbar , Container, MenuItem} from '@material-ui/core';
import MaterialTable from 'material-table';
import {tableIcons} from '../utils/TableIcons';


import './Home.css';
import Chat from '../components/Chat';


const columns=[
    { title: 'Nome', field: 'nome' },
    { title: 'Origem', field: 'origem' },
    { title: 'Destino', field: 'destino' },
    ];
    
const data=[
    { nome: 'Inara', origem: 'Floresta', destino: 'Silva Lobo' },
    { nome: 'Pedro', origem: 'Barro Preto', destino: 'Buritis' },
    { nome: 'Stéphanie', origem: 'Santa Mônica', destino: 'Carlos Luz' },
    { nome: 'Marcos', origem: 'Pampulha', destino: 'Carlos Luz' },
    { nome: 'Juliana', origem: 'Eldorado', destino: 'Buritis' },
    { nome: 'João Paulo', origem: 'Nacional', destino: 'Buritis' },
    { nome: 'Gabriel', origem: 'Caiçara', destino: 'Buritis' },
    { nome: 'Fernando', origem: 'Santa Efigênia', destino: 'Silva Lobo' },
    { nome: 'Edson', origem: 'Centro', destino: 'Silva Lobo' },
    { nome: 'Leonardo', origem: 'Santa Rosa', destino: 'Buritis' },
    { nome: 'Livia', origem: 'Aparecida', destino: 'Carlos Luz' },
    { nome: 'Mariana', origem: 'São Gabriel', destino: 'Silva Lobo' },
    { nome: 'Ana Maria', origem: 'Pompéia', destino: 'Buritis' },
    { nome: 'Carolina', origem: 'Horto', destino: 'Buritis' },
    { nome: 'Daniella', origem: 'Ingá', destino: 'Carlos Luz' },
    { nome: 'Kleber', origem: 'Jardim Terezópolis', destino: 'Carlos Luz' },
    { nome: 'Ivan', origem: 'Barreiro', destino: 'Silva Lobo' },
    { nome: 'Januário', origem: 'Olhos dÁgua', destino: 'Carlos Luz' },
    { nome: 'Betina', origem: 'Venda Nova', destino: 'Silva Lobo' },
    { nome: 'Andre', origem: 'Alípio de Melo', destino: 'Buritis' },
    ];
    


export default function PrimarySearchAppBar() {

  const [anchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
    >
    </Menu>
  );
  
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
        
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          
            <div>
              <h1>Carona Fácil</h1>
            </div>
            
          <div>
          
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit">
              <AccountCircle />
            </IconButton>
            
          </div>
          
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
                    icons={tableIcons}/>    
            </Container>
       </main>
       <footer>
          <h2>Footer</h2>
          <p>Todos os direitos reservados.</p>
       </footer>
      {renderMenu}
    </div>
  );
}
