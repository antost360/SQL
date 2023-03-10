const content = document.getElementById("content")
async function przegladaj() {
  //import danych z bazy
  var data = await fetch(`${base_url}/itemlist`)
  json = await data.json()
  console.log(json)
  content.innerHTML = ""
  document.getElementById("name").value = ""
  document.getElementById("surname").value = ""
  document.getElementById("clas").value = ""

  //generowanie ofert
  for (var i = 0; i <= json.length - 1; i++) {
    const div = document.createElement("div")
    div.classList.add("oferta")

    const div_text = document.createElement("div")
    div_text.setAttribute("id", "div_text")

    const imie = document.createElement("h1")
    div_text.appendChild(imie)

    const nazwisko = document.createElement("h1")
    div_text.appendChild(nazwisko)

    const klasa = document.createElement("h1")
    div_text.appendChild(klasa)

    const full = document.createElement("h1")
    full.classList.add("full")
    full.innerHTML = `${json[i].imie} ${json[i].nazwisko} ${json[i].klasa}`
    div_text.appendChild(full)

    div.appendChild(div_text)
    content.appendChild(div)
  }
}
przegladaj()

async function addItem() {
  const name = document.getElementById("name").value
  const surname = document.getElementById("surname").value
  const clas = document.getElementById("clas").value

  const url = `${base_url}/additem/${name}/${surname}/${clas}`

  await fetch(url)
  przegladaj()
}
