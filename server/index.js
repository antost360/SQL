const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()
const port = 3000

app.use(cors())

//tworzenie połączenie obsługa błędów err = bool
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "0603"
})

con.connect(function (err) {
    if (err) console.log(err)
    else console.log("połączono z bazą danych")
})

//fields = info o result
app.get("/select", (req, res) => {
    const sql = "SELECT * FROM uczniowie"
    con.query(sql, (err, result, fields) => {
        if (err) console.log(err)
        else res.send(result)
    })
})


app.get("/", (req, res) => {
    res.send("ok")
})



app.listen(port, () => {
    console.log("app works on port: " + port)
})