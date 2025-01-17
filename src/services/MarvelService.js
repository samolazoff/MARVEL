import Passwords from './env';

const passwords = new Passwords();


class MarvelService {
    key = passwords.MARVEL_API_KEY;
    
    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error (`Could not fetch ${URL}, status: ${res.status}`);
        };

        return await res.json();

    };

    getAllCharacters = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=${this.key}`);
    };

    getCharacter = (id) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${this.key}`);
    };

};

export default MarvelService;