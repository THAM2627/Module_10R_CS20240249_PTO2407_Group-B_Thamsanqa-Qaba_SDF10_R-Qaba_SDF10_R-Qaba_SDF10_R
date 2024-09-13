/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


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

    appendItemToShoppingListEl(inputValue)
})

onValue(shoppingListInDB, function(snapshot) {
    let itemsArrray = Object.value(snapshot.val())
})
    clearShoppingListEl()
    shoppingListEl.innerHTML = ""

    for (let i=0; i< itemsArrray.length; i++) {
    appendItemToShoppingListEl(itemsArrray[i])
    }

function clearShoppingListEl(){
    shoppingListEl.innerHTML = ""
}
function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}