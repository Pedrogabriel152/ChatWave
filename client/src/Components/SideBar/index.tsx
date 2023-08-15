import { SideBarStyle } from "../../Assets/Style";
import Contacts from "../Contacts";
import Nav from "../Nav";
import Notifications from "../Notification";
import Search from "../Search";

const SideBar = () => {
    return (
        <SideBarStyle>
            <Nav />
            <Notifications/>
            <Search />
            <Contacts />
        </SideBarStyle>
    );
}

export default SideBar;