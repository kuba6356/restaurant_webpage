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

export default menuZacheta