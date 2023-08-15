import { MessageContainer, ChatMessage } from "../../Assets/Style";

const Message = () => {
    return (
        <MessageContainer className="messages-container">
            <div className="bg-image"></div>
            <ChatMessage className="chat-messages">
                <p className="guest-message">Olá, bom dia</p>
                <p className="user-message">Oi, tudo bem?</p>
            </ChatMessage>
        </MessageContainer>
    );
}

export default Message;