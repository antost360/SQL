const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()
const port = 3000

app.use(cors())



app.get("/", (req, res) => {
    res.send("ok")
})



app.listen(port, () => {
    console.log("app works on port: " + port)
})