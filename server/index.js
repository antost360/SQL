const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const port = 3000
const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send("ok")
})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "0603"
})

con.connect((err) => {
    if (err) console.log(err)
    else console.log("polączono z bazą danych")
})

app.get("/add/:imie/:nazwisko/:klasa", (req, res) => {
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    const klasa = req.params.klasa

    const sql = `INSERT INTO uczniowie (imie, nazwisko, klasa) VALUES ('${imie}', '${nazwisko}','${klasa}')`

    con.query(sql, (err, result, fields) => {
        if (err) console.log(err)
        else res.send("dodano rekord")
    })
})

app.get("/select", (req, res) => {
    const sql = "SELECT * FROM uczniowie"

    con.query(sql, (err, result, fields) => {
        if (err) console.log(err)
        else res.send(result)
    })
})



app.listen(port, () => {
    console.log(`app works on port: ${port}`)
})