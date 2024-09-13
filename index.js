/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

import { initializeApp } from "https://playground-cart-tham-default-rtdb.asia-southeast1.firebasedatabase.app/"
import { getDatabase, ref, push, onValue } from "https://playground-cart-tham-default-rtdb.asia-southeast1.firebasedatabase.app/"

const appSettings = {
    databaseURL:"https://playground-cart-tham-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database,"shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value 

    push(shoppingListInDB, inputValue)

    clearInputFieldEl()

})

onValue(shoppingListInDB, function(snapshot) {
    let itemsArrray = Object.entries(snapshot.val())
})
    clearShoppingListEl()
    shoppingListEl.innerHTML = ""

    for (let i=0; i< itemsArrray.length; i++) {
        let currentItem = itemsArrray[i]
        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]

    appendItemToShoppingListEl(currentItemValue)
    }

function clearShoppingListEl(){
    shoppingListEl.innerHTML = ""
}
function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    let itemID = item[0]
    let itemValue = item[1] 

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    newEl.addEventListener ("click", function() {
        let exactLocationofItemInDB = ref (database, `shoppingLis/${itemID}`)

    })
    remove(exactLocationofItemInDB)
    
    shoppingListEl.append(newEl)
}
shoppingListEl.innerHTML += `<li>${itemValue}</li>`