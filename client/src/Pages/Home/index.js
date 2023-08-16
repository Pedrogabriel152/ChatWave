import ChatContainer from "../../Components/ChatContainer";
import SideBar from "../../Components/SideBar";
import { Container } from "../../Assets/Style";
import Echo from "laravel-echo";
import { api } from "../../utils/api";
import { useEffect } from "react";
import axios from "axios";
import Pusher from "pusher-js"

const Home = () => {
    // useEffect(() => {
    //     // Inicialize o Echo com as configurações do servidor
    //     const echo = new Echo({
    //       broadcaster: 'pusher',
    //       key: process.env.REACT_APP_PUSHER_APP_KEY,
    //       cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
    //       encrypted: true,
    //     });
    
    //      // Exemplo de canal e evento para ouvir
    //     const channel = echo.channel('chat.1.1');
    //     const eventListener = (data: any) => {
    //         console.log('Received event:', data);
    //     };
    //     channel.listen('chat.1.1', eventListener);

    //     return () => {
    //     // Desinscreva-se do evento ao desmontar o componente
    //         channel.stopListening('chat.1.1', eventListener);
    //     };
    //   }, []);

    var pusher = new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
        cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
        encrypted: true
    });
    console.log(pusher)

    var channel = pusher.subscribe('chat.1.1');
    // channel.bind('App\\Events\\NotificacaoArtigo', function(data) {
    // //aqui add o texto na div
    // $('.artigo').text('O artigo (' + data.artigo.titulo + ') acaba de ser criado');
    //     //aqui eu mostro a div que esta escondida pelo display:none 
    //     $('.artigo').show();
    //     //aqui eu escondo a div depois de alguns segundos. 
    //     $(document).ready(function () {
    //         setTimeout(function () {
    //             $('#msg').fadeOut(15000);
    //         }, 10000);
    //     });
    // });
    

    return (
        <Container>
            <SideBar />
            <ChatContainer/>
        </Container>
    )
}

export default Home;