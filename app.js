require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

//Routes
app.get("/", (req, res) => res.send("<h1>Hello Coders</h1>"))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server connected on port ${PORT}`))