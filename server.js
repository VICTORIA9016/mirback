const express = require("espress");
const cors = require("cors");
const {conect} = require("./src/db");

const port = 8000;

const app = express()
conect()
app.use(cors())
app.use(express.json())
app.listen(port, ()=>{console.log (`Server listening on http://localhost:${port}`
)})

