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
    var jsonImie = json[i].imie
    var jsonNazwisko = json[i].nazwisko
    var jsonKlasa = json[i].klasa
    var jsonId = json[i].id

    const div = document.createElement("div")
    div.classList.add("oferta")

    const div_btn = document.createElement("div")

    const div_text = document.createElement("div")
    div_text.classList.add("div_text")

    const imie = document.createElement("h1")
    imie.innerHTML = jsonImie
    div_text.appendChild(imie)

    const id = document.createElement("h1")
    id.innerHTML = jsonId

    const nazwisko = document.createElement("h1")
    nazwisko.innerHTML = jsonNazwisko
    div_text.appendChild(nazwisko)

    const klasa = document.createElement("h1")
    klasa.innerHTML = jsonKlasa
    div_text.appendChild(klasa)

    const usun = document.createElement("button")
    usun.innerHTML = "delete ❌"

    usun.addEventListener("click", async () => {
      const url = `${base_url}/usun/${id.innerHTML}`
      await fetch(url)
      przegladaj()
    })

    div_btn.appendChild(usun)

    div.appendChild(div_text)
    div.appendChild(div_btn)
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
