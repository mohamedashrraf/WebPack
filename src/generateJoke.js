import axios from "axios";

export default async function generateJoke() {
    const config = {
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        }
    }

    await axios.get("https://icanhazdadjoke.com", config).then((res) => {
        console.log(res);
        document.getElementById('jokes').innerHTML = res.data.joke
    }).catch((err) => {
        console.error(err)
    })
} 