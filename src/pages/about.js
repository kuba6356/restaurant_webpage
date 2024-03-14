function opis(content){
    // Funkcja buduję zakładkę opis w contencie
    const opis = document.createElement("div")
    opis.setAttribute("id","opis")
    opis.classList.add("content")
    const historia = document.createElement("div")
    historia.setAttribute("id","historia")
    const tytulGlowna = document.createElement("div")
    tytulGlowna.setAttribute("id","tytulGlowna")
    tytulGlowna.classList.add("tytul")
    tytulGlowna.textContent += "Historia Pizzerino"
    const historiaTekst = document.createElement("div")
    historiaTekst.setAttribute("id","historiaTeskt")
    historiaTekst.classList.add("ZwyklyTeskt")
    historiaTekst.textContent += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi magna, rutrum vitae nibh sed, consequat pharetra libero. Donec eleifend finibus risus, eu pellentesque massa posuere vitae. Suspendisse efficitur enim nisi, ac viverra risus semper et. Fusce id ligula in velit tempus pulvinar. Nunc sit amet pretium dui. Nam et molestie ligula, a euismod purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer at dui ac diam aliquet egestas. Proin iaculis pulvinar nisl nec aliquam. Ut id est ut dolor tristique imperdiet ac nec lectus. Suspendisse vitae vulputate eros, id viverra quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nec dui arcu. "
    const czytajWiecej = document.createElement("button")
    czytajWiecej.setAttribute("id","czytajWiecej")
    czytajWiecej.classList.add("basicButton")
    czytajWiecej.textContent += "Czytaj więcej"
    const zdjecia = document.createElement("div")
    zdjecia.setAttribute("id", "zdjecia")
    const zdjecia1 = document.createElement("img")
    zdjecia1.src = "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg"
    zdjecia1.setAttribute("id", "dlugieZdjecie")
    zdjecia1.classList.add("zdjeciehistoria")
    const maleZdjecia = document.createElement("div")
    maleZdjecia.setAttribute("id", "maleZdjecia")
    const zdjecia2 = document.createElement("img")
    zdjecia2.src = "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg"
    zdjecia2.classList.add("zdjeciehistoria")
    const zdjecia3 = document.createElement("img")
    zdjecia3.src = "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg"
    zdjecia3.classList.add("zdjeciehistoria")
    content.appendChild(opis)
    opis.appendChild(historia)
    historia.appendChild(tytulGlowna)
    historia.appendChild(historiaTekst)
    historia.appendChild(czytajWiecej)
    opis.appendChild(zdjecia)
    zdjecia.appendChild(zdjecia1)
    zdjecia.appendChild(maleZdjecia)
    maleZdjecia.appendChild(zdjecia2)
    maleZdjecia.appendChild(zdjecia3)
}

export default opis