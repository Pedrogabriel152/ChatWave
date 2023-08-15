import Message from "../Message";
import NavChat from "../NavChat";
import SendMessage from "../SendMessage";

const ChatContainer = () => {
    return(
        <main className="chat-container">
            <NavChat />
            <Message/>
            <SendMessage />
            {/* <nav className="chat-navbar">
                <div className="contactinfo-container">
                    <img className="user-photo" src="img/avatar2.png" />
                    <p className="user-name">Sabrina Matos</p>
                </div>
                <ul className="chattools-container">
                    <li><i className="fas fa-search"></i></li>
                    <li><i className="fas fa-paperclip"></i></li>
                    <li><i className="fas fa-ellipsis-v"></i></li>
                </ul>
            </nav> */}
            <div className="messages-container">
                <div className="bg-image"></div>
                <div className="chat-messages">
                    <p className="guest-message">Olá, bom dia</p>
                    <p className="user-message">Oi, tudo bem?</p>
                </div>
            </div>
            {/* <div className="sendmessage-container">
                <i className="far fa-grin"></i>
                <input id="chatmessage" type="text" name="message" className="userinput" placeholder="Digite uma mensagem" />
                <i className="fas fa-microphone"></i>
            </div> */}
        </main>	
    );
}

export default ChatContainer;