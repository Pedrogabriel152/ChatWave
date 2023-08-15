import { ChatContainerStyle } from "../../Assets/Style";
import Message from "../Message";
import NavChat from "../NavChat";
import SendMessage from "../SendMessage";

const ChatContainer = () => {
    return(
        <ChatContainerStyle className="chat-container">
            <NavChat />
            <Message/>
            <SendMessage />
        </ChatContainerStyle>	
    );
}

export default ChatContainer;