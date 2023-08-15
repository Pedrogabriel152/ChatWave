import ChatContainer from "../../Components/ChatContainer";
import SideBar from "../../Components/SideBar";
import { Container } from "../../Assets/Style";
import Echo from "laravel-echo";
import { api } from "../../utils/api";
import { useEffect } from "react";
import Pusher from 'pusher-js';

const Home = () => {
    useEffect(() => {
        // Inicialize o Echo com as configurações do servidor
        const echo = new Echo({
          broadcaster: 'pusher',
          key: process.env.REACT_APP_PUSHER_APP_KEY,
          cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
          encrypted: true,
        });
    
         // Exemplo de canal e evento para ouvir
        const channel = echo.channel('chat.1.1');
        const eventListener = (data: any) => {
        console.log('Received event:', data);
        };
        channel.listen('chat.1.1', eventListener);

        return () => {
        // Desinscreva-se do evento ao desmontar o componente
        channel.stopListening('chat.1.1', eventListener);
        };
      }, []);

    return (
        <Container>
            <SideBar />
            <ChatContainer/>
        </Container>
    )
}

export default Home;