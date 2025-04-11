require('dotenv').config();
const mongoose = require("mongoose");

const DB_URL = process.env.DATABASE_URL;
mongoose.connect(DB_URL).then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log("connection failed: ", err);
});

const userSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    img: { type: String, require: true },
    amount: { type: Number, require: true }
});

module.exports = mongoose.model("thirdprojects", userSchema);