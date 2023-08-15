const SendMessage = () => {
    return(
        <div className="sendmessage-container">
            <i className="far fa-grin"></i>
            <input id="chatmessage" type="text" name="message" className="userinput" placeholder="Digite uma mensagem" />
            <i className="fas fa-microphone"></i>
        </div>
    );
}

export default SendMessage;