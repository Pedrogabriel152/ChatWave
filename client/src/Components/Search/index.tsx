import { SearchContainer } from "../../Assets/Style";

const Search = () => {
    return(
        <SearchContainer className="search-container">
            <i id="contact-search" className="fas fa-search"></i>
            <input type="text" id="search" name="search" placeholder="Procurar ou começar uma nova conversa"/>
        </SearchContainer>
    );
}

export default Search;