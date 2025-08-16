const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const URL = process.env.DB_URL;
const ConnectDb = async () => {
    try {
        await mongoose.connect(URL)
        console.log("Database is Connected");

    } catch (error) {
        console.log(error.message);

    }
}

module.exports = { ConnectDb }