const Contacts = () => {
    return(
        <div className="contacts-container">
            <div className="contact-box active-chat">
                <img className="user-photo" src="img/avatar2.png"/>
                <div className="user-info">
                    <p className="user-name">Sabrina Matos</p>
                    <p className="user-messagepreview"><i className="fas fa-check-double"></i>Oi, tudo bem?</p>
                </div>
                <div className="message-info">
                    <p className="message-time">22:40</p>
                </div>
            </div>
            <div className="contact-box">
                <img className="user-photo" src="img/avatar3.png"/>
                <div className="user-info">
                    <p className="user-name">João Augusto</p>
                    <p className="user-messagepreview">Está disponível para um freela?</p>
                </div>
                <div className="message-info">
                    <p className="message-time">12:30</p>
                    <p className="message-pending">3</p>
                </div>
            </div>
            <div className="contact-box">
                <img className="user-photo" src="img/avatar4.png"/>
                <div className="user-info">
                    <p className="user-name">Maria Silva</p>
                    <p className="user-messagepreview">O projeto ficou perfeito, obrigada!</p>
                </div>
                <div className="message-info">
                    <p className="message-time">08:20</p>
                    <p className="message-pending">5</p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;