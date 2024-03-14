//make diffrent pages designs for diffrent pages
import zacheta from "./pages/home.js"
import opis from "./pages/about.js"
import menuZacheta from "./pages/menu.js"
const body = document.querySelector("body")
const content = document.createElement("div")
content.setAttribute("id", "content")
body.appendChild(content)
console.log(zacheta)
zacheta(content)
opis(content)
menuZacheta(content)
bottom(body)

const home = document.getElementById("home")
home.addEventListener("click", () => {
    removeContent()
    zacheta(content)
    opis(content)
    menuZacheta(content)

})

const menu = document.getElementById("menu")
menu.addEventListener("click", () => {
    removeContent()
    menuZacheta(content)
})
const about = document.getElementById("about")
about.addEventListener("click", () => {
    removeContent()
    opis(content)
})
const contact = document.getElementById("contact")
contact.addEventListener("click", () => {
    removeContent()
    
})

function bottom(body){
    // funkcja robiąca bottom strony 
    //zamienic div 1-7 na loopa generujacego puste divy / sprawdzic jak to lepiej zrobic
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const bottom = document.createElement("div")
    bottom.setAttribute("id", "bottom")
    const nawigacja = document.createElement("div")
    nawigacja.setAttribute("id", "nawigacja")
    const menu = document.createElement("div")
    menu.setAttribute("id", "menu")
    menu.classList.add("navigation")
    menu.textContent += "MENU"
    const about = document.createElement("div")
    about.setAttribute("id", "about")
    about.classList.add("navigation")
    about.textContent += "ABOUT"
    const contact = document.createElement("div")
    contact.setAttribute("id", "contact")
    contact.classList.add("navigation")
    contact.textContent += "CONTACT"
    const order = document.createElement("div")
    order.setAttribute("id", "order")
    order.classList.add("navigation")
    order.textContent += "ORDER"
    const cookies = document.createElement("div")
    cookies.setAttribute("id", "cookies")
    cookies.classList.add("navigation")
    cookies.textContent += "COOKIES"
    const szybkiKontakt = document.createElement("div")
    szybkiKontakt.setAttribute("id", "szykiKontakt")
    const telefon = document.createElement("div")
    telefon.textContent += "telefon"
    const numerTel = document.createElement("a")
    numerTel.setAttribute("href", "+48000000000")
    numerTel.textContent += "📞000 000 000"
    const email = document.createElement("div")
    email.textContent += "Email"
    const emailadres = document.createElement("a")
    emailadres.setAttribute("href", "email@emial.com")
    emailadres.textContent += "✉️email.com"
    const lokalizacja = document.createElement("div")
    lokalizacja.textContent += "Lokalizacja"
    const adresLokalizacji = document.createElement("a")
    adresLokalizacji.setAttribute("href", "https://www.google.com/maps/place/Praça+do+Comércio/@38.707287,-9.1389416,17z/data=!3m1!4b1!4m6!3m5!1s0xd19347a30a54b63:0x30532f5f6b28e044!8m2!3d38.7072828!4d-9.1363613!16zL20vMGczbDNz?entry=ttu")
    adresLokalizacji.textContent += "ul. adresowa 11, adresowo 00-120"
    const GodzinyOtwarcia = document.createElement("div")
    GodzinyOtwarcia.setAttribute("id", "GodzinyOtwarcia")
    const napisGlowna = document.createElement("div")
    napisGlowna.classList.add("napisGlowna")
    napisGlowna.textContent += "Zapraszamy"
    const div4 = document.createElement("div")
    const pogrubione = document.createElement("div")
    pogrubione.classList.add("pogrubione")
    const div5 = document.createElement("div")
    const tekstDo1 = document.createElement("div")
    tekstDo1.classList.add("tekstdol")
    tekstDo1.textContent += "poniedzialek-piatek"
    const godzPnPt = document.createElement("div")
    godzPnPt.textContent += "10:00-23:00"
    const div6 = document.createElement("div")
    const tekstDo2 = document.createElement("div")
    tekstDo2.classList.add("tekstdol")
    tekstDo2.textContent += "sobota"
    const godzSB = document.createElement("div")
    godzSB.textContent += "8:00-23:00"
    //w ostatecznej wersji zmienic żeby algorytm sprawdzał czy restauracja jest otwarta jeśli tak otwate jesli nie zamkniete
    const div7 = document.createElement("div")
    const otwarte = document.createElement("div")
    otwarte.setAttribute("id", "otwarteEmoji")
    otwarte.classList.add("pogrubione")
    otwarte.textContent += "🟢 Otwarte"
    const otwarteTekst = document.createElement("div")
    otwarteTekst.setAttribute("id", "OtwarteTeskt")
    otwarteTekst.classList.add("tekstdol")
    otwarteTekst.textContent += "Dzisiaj jest otwarte do godziny XX. Zapraszamy"
    body.appendChild(bottom)
    bottom.appendChild(nawigacja)
    nawigacja.appendChild(menu)
    nawigacja.appendChild(about)
    nawigacja.appendChild(contact)
    nawigacja.appendChild(order)
    nawigacja.appendChild(cookies)
    bottom.append(szybkiKontakt)
    szybkiKontakt.appendChild(div1)
    div1.appendChild(telefon)
    div1.appendChild(numerTel)
    szybkiKontakt.appendChild(div2)
    div2.appendChild(email)
    div2.appendChild(emailadres)
    szybkiKontakt.appendChild(div3)
    div3.appendChild(lokalizacja)
    div3.appendChild(adresLokalizacji)
    bottom.appendChild(GodzinyOtwarcia)
    GodzinyOtwarcia.appendChild(napisGlowna)
    GodzinyOtwarcia.appendChild(div4)
    div4.appendChild(pogrubione)
    pogrubione.appendChild(div5)
    div5.appendChild(tekstDo1)
    div5.appendChild(godzPnPt)
    pogrubione.appendChild(div6)
    div6.appendChild(tekstDo2)
    div6.appendChild(godzSB)
    GodzinyOtwarcia.appendChild(div7)
    div7.appendChild(otwarte)
    div7.appendChild(otwarteTekst)

}

function removeContent(){
    const content = document.getElementById("content")
    while(content.firstChild){
        content.firstChild.remove()
    }
}

