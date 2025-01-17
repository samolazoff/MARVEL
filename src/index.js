import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";

import Passwords from './services/env';
import MarvelService from "./services/MarvelService";

const marvelService = new MarvelService();
const passwords = new Passwords();

marvelService.getAllCharacters(passwords.MARVEL_API_KEY).then(res => console.log(res));
marvelService.getCharacter(passwords.MARVEL_API_KEY, 1011052).then(res => console.log(res));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
