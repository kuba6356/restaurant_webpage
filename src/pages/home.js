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

export default zacheta