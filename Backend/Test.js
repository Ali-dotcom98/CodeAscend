const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const API = process.env.Code_Submission;
console.log(API);

axios.get("https://judge0-ce.p.rapidapi.com/languages", {
    headers: {
        "X-RapidAPI-Key": API,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
    }
})
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
