import { ContactsContainer, ContactBox, UserContatcPhoto, UserInfo, MessageInfo } from "../../Assets/Style";
import Logo from "../../Assets/img/user.jpeg";
import { BiCheckDouble } from "react-icons/bi";

const Contacts = () => {
    return(
        <ContactsContainer>
            <ContactBox className="contact-box active-chat">
                <UserContatcPhoto src={Logo}/>
                <UserInfo className="user-info">
                    <p className="user-name">Sabrina Matos</p>
                    <p className="user-messagepreview"><BiCheckDouble size={20} color="#4FC3F7"/>Oi, tudo bem?</p>
                </UserInfo>
                <MessageInfo>
                    <p className="message-time">22:40</p>
                </MessageInfo>
            </ContactBox>
            <ContactBox className="contact-box">
                <UserContatcPhoto src={Logo}/>
                <UserInfo className="user-info">
                    <p className="user-name">João Augusto</p>
                    <p className="user-messagepreview">Está disponível para um freela?</p>
                </UserInfo>
                <MessageInfo>
                    <p className="message-time">12:30</p>
                    <p className="message-pending">3</p>
                </MessageInfo>
            </ContactBox>
            <ContactBox className="contact-box">
                <UserContatcPhoto src={Logo}/>
                <UserInfo className="user-info">
                    <p className="user-name">Maria Silva</p>
                    <p className="user-messagepreview">O projeto ficou perfeito, obrigada!</p>
                </UserInfo>
                <MessageInfo>
                    <p className="message-time">08:20</p>
                    <p className="message-pending">5</p>
                </MessageInfo>
            </ContactBox>
        </ContactsContainer>
    );
}

export default Contacts;