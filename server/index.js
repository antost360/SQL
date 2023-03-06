const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()
const port = 3000

app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    databse: "06.03"
})

con.connect(function (err) {
    if (err) console.log(err)
    else console.log("połączono z bazą danych")



})





app.get("/", (req, res) => {
    res.send("ok")
})



app.listen(port, () => {
    console.log("app works on port: " + port)
})