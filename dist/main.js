const body = document.querySelector("body")
const content = document.createElement("div")
content.setAttribute("id", "content")
body.appendChild(content)
zacheta(content)
opis(content)
menuZacheta(content)
bottom(body)

function zacheta(content){
    //funckja buduje zaklade zacheta w contecnie
    const zacheta = document.createElement("div")
    zacheta.setAttribute("id","zacheta")
    zacheta.classList.add("content")
    const socjale = document.createElement("div")
    socjale.setAttribute("id","socjale")
    const tiktok = document.createElement("div")
    tiktok.setAttribute("id", "tiktok")
    tiktok.classList.add("socjale")
    const fb = document.createElement("div")
    fb.setAttribute("id","fb")
    fb.classList.add("socjale")
    const yt = document.createElement("div")
    yt.setAttribute("id","yt")
    yt.classList.add("socjale")
    const glowna = document.createElement("div")
    glowna.setAttribute("id","glowna")
    const slogan = document.createElement("div")
    slogan.setAttribute("id","slogan")
    slogan.textContent += "PIZZERINO PIZZA"
    const zachetaNapis = document.createElement("div")
    zachetaNapis.setAttribute("id","zachetaNapis")
    zachetaNapis.classList.add("napisGlowna")
    zachetaNapis.innerHTML += "głodny?<br>Nie czekaj"
    const order = document.createElement("button")
    order.setAttribute("id","order")
    order.classList.add("basicButton")
    order.textContent += "Zamów"
    content.appendChild(zacheta)
    zacheta.appendChild(socjale)
    socjale.appendChild(tiktok)
    socjale.appendChild(fb)
    socjale.appendChild(yt)
    zacheta.appendChild(glowna)
    glowna.appendChild(slogan)
    glowna.appendChild(zachetaNapis)
    glowna.appendChild(order)
}

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

function menuZacheta(content){
    //funkcja buduje zaklade menuzacheta w zakladce content
    const menuZacheta = document.createElement("div")
    menuZacheta.setAttribute("id", "menuZacheta")
    menuZacheta.classList.add("content")
    const tytul = document.createElement("div")
    tytul.classList.add("tytul")
    tytul.textContent += "PIZZERINO PIZZA"
    const napisGlowna = document.createElement("div")
    napisGlowna.classList.add("napisglowna")
    napisGlowna.textContent += "Zobacz nasze menu"
    const PrzykladoweMenu = document.createElement("div")
    PrzykladoweMenu.setAttribute("id", "PrzykladMenu")
    const MenuItem = []
    const MenuPicture = []
    const ItemInfo = []
    const itemName = []
    const ItemPrice = []
    const itemDesc = []
    content.appendChild(menuZacheta)
    menuZacheta.appendChild(tytul)
    menuZacheta.appendChild(napisGlowna)
    menuZacheta.appendChild(PrzykladoweMenu)
    //for loop tworzący 4 elemnty MenuItem odpowiednio podpisane 1-4 oraz appenduje je do przykaldowegomenu
    for(let i = 0; i < 4; i++){
        const div = document.createElement("div")
        MenuItem[i] = document.createElement("div")
        MenuItem[i].classList.add("MenuItem")
        MenuPicture[i] = document.createElement("img")
        MenuPicture[i].classList.add("MenuPicture")
        // zastąpić switchem po zamienieniu placeholderów
        MenuPicture[i].src = "https://i.pinimg.com/originals/bd/c6/78/bdc6784d9f07e53b1098541cd02da771.png"
        // tak samo jak wyzej zastapic switchami po zmianie placeholderowych nazw/cen/opisow
        ItemInfo[i] = document.createElement("div")
        ItemInfo[i].classList.add("ItemInfo")
        itemName[i] = document.createElement("div")
        itemName[i].classList.add("itemName")
        itemName[i].textContent += "zupa z buraka"
        ItemPrice[i] = document.createElement("div")
        ItemPrice[i].classList.add("ItemPrice")
        ItemPrice[i].textContent += "12,99 zł"
        itemDesc[i] = document.createElement("div")
        itemDesc[i].classList.add("itemDesc")
        itemDesc[i].textContent += "mniam mniam"
        PrzykladoweMenu.appendChild(MenuItem[i])
        MenuItem[i].appendChild(MenuPicture[i])
        MenuItem[i].appendChild(div)
        div.appendChild(ItemInfo[i])
        ItemInfo[i].appendChild(itemName[i])
        ItemInfo[i].appendChild(ItemPrice[i])
        div.appendChild(itemDesc[i])
    }
    const basicButton = document.createElement("button")
    basicButton.classList.add("basicButton")
    basicButton.textContent += "MENU"
    menuZacheta.appendChild(basicButton)
}

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