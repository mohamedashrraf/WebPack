import generateJoke from './generateJoke';
import './style/main.scss';
import avatar from './assets/avatar.png';

    const image = document.getElementById("image");
    image.src = avatar;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);
    
generateJoke()