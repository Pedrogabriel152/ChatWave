import { SendMessageContainer } from "../../Assets/Style";
import { FaGrin, FaMicrophone } from "react-icons/fa";

const SendMessage = () => {
    return(
        <SendMessageContainer className="sendmessage-container">
            <FaGrin />
            <input id="chatmessage" type="text" name="message" className="userinput" placeholder="Digite uma mensagem" />
            <FaMicrophone id="microphone"/>
        </SendMessageContainer>
    );
}

export default SendMessage;