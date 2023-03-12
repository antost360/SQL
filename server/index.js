const express = require("express")
const cors = require("cors")
const app = express()
const mysql = require("mysql")
const port = 3000

app.use(cors())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "1003",
})

con.connect((err) => {
  if (err) console.log(err)
  else console.log("connected to database")
})

app.get("/itemlist", (req, res) => {
  const sql = "SELECT * FROM uczniowie"

  con.query(sql, (err, result, fields) => {
    if (err) console.log(err)
    else res.send(result)
  })
})

app.get("/additem/:imie/:nazwisko/:klasa", (req, res) => {
  const imie = req.params.imie
  const nazwisko = req.params.nazwisko
  const klasa = req.params.klasa
  const sql = `INSERT INTO uczniowie (imie, nazwisko, klasa) VALUES ('${imie}', '${nazwisko}', '${klasa}')`

  con.query(sql, (err, result, fields) => {
    if (err) console.log(err)
    else res.send("item added")
  })
})

app.get("/usun/:data", (req, res) => {
  const data = req.params.data
  const sql = `DELETE FROM uczniowie WHERE id=${data};`

  con.query(sql, (err, result, fields) => {
    if (err) console.log(err)
    else res.send("item removed")
  })
})

app.listen(port)
