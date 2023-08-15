import { ToolbarContainer, UserPhoto, Auxicons } from "../../Assets/Style";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../../Assets/img/user.jpeg";

const Nav = ()  => {
    return (
        <ToolbarContainer>
            <UserPhoto src={Logo}/>
            <Auxicons>
                <i className="fas fa-spinner"></i>
                <i className="fas fa-comment-alt"></i>
                <i className="fas fa-ellipsis-v"></i>
            </Auxicons>
        </ToolbarContainer>
    )
}

export default Nav;