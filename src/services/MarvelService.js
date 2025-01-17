

class MarvelService {
    
    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error (`Could not fetch ${URL}, status: ${res.status}`);
        };

        return await res.json();

    };

    getAllCharacters = (key) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=${key}`);
    };

    getCharacter = (key, id) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${key}`);
    };

};

export default MarvelService;