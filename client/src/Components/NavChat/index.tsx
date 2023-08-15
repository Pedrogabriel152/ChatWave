const NavChat = () => {
    return(
        <nav className="chat-navbar">
            <div className="contactinfo-container">
                <img className="user-photo" src="img/avatar2.png" />
                <p className="user-name">Sabrina Matos</p>
            </div>
            <ul className="chattools-container">
                <li><i className="fas fa-search"></i></li>
                <li><i className="fas fa-paperclip"></i></li>
                <li><i className="fas fa-ellipsis-v"></i></li>
            </ul>
        </nav>
    );
}

export default NavChat;