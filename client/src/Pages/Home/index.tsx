import ChatContainer from "../../Components/ChatContainer";
import SideBar from "../../Components/SideBar";
import { Container } from "../../Assets/Style";

const Home = () => {
    return (
        <Container>
            <SideBar />
            <ChatContainer/>
        </Container>
    )
}

export default Home;