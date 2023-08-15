import { NotificationsStyle, NotificationsIcons } from "../../Assets/Style";
import { FaBellSlash, FaAngleRight } from "react-icons/fa";

const Notifications = () => {
    return (
        <NotificationsStyle>
            <NotificationsIcons>
                <FaBellSlash size={25}/>
            </NotificationsIcons>
            <p className="receive-notification">Receba notificações de novas mensagens</p>
            <p className="activate-notification">Ativar notificações na área de trabalho <i><FaAngleRight/></i></p>
        </NotificationsStyle>
    );
}

export default Notifications;