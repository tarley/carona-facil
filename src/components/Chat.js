import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {
    
    abrirChat = () => {
        document.getElementById("myForm").style.display = "block";
    }
    
   fecharChat = () => {
        document.getElementById("myForm").style.display = "none";
    }   
    
    render () {
        return(
            <div>
                <button class="open-button"onClick={() => this.abrirChat()}>Chat</button>
                <div class="chat-popup" id="myForm">
                  <form action="/action_page.php" class="form-container">
                    <h1>Chat</h1>
                    <textarea id="chat" disabled></textarea>
                    <label><b>Mensagem</b></label>
                    <textarea placeholder="Inicie uma conversa.." name="msg" required></textarea>
                    <button type="submit" class="btn">Enviar</button>
                    <button type="button" class="btn cancel" onClick={() => this.fecharChat()}>Fechar</button>
                  </form>
                </div>
            </div>
            );
    }
}

export default Chat;