const express = require("express")
const cors = require("cors");
const helmet = require("helmet")
const dotenv = require('dotenv');
const routers = require("./routes/index")

dotenv.config();

const server = express();

server.use(helmet())
server.use(express.json())
server.use(cors());

server.use(routers)

server.get('/', (req, res) => {
    res.status(200).json({ message: `Welcome to the Eventico API` })
})

module.exports = server;