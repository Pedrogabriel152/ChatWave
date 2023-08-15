import { ChatNavBar, ContactInfo, UserPhoto, ChatTools } from "../../Assets/Style";
import Logo from "../../Assets/img/user.jpeg";
import { FaSearch, FaPaperclip, FaEllipsisV } from "react-icons/fa";

const NavChat = () => {
    return(
        <ChatNavBar className="chat-navbar">
            <ContactInfo className="contactinfo-container">
                <UserPhoto src={Logo} />
                <p className="user-name">Sabrina Matos</p>
            </ContactInfo>
            <ChatTools className="chattools-container">
                <li><FaSearch /></li>
                <li><FaPaperclip /></li>
                <li><FaEllipsisV /></li>
            </ChatTools>
        </ChatNavBar>
    );
}

export default NavChat;