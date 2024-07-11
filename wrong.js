// Header fixes
const header = document.querySelector("header")
header.style.justifyContent = "initial";
header.style.borderBottom = "1px solid lightgray"
header.children[0].style.color = "#384241"

// Main fixes
const recipeName = document.querySelector("#recipe-name")
recipeName.innerHTML = "Frozen Cheescake"

const timer = document.querySelector(".time-container")
timer.children[0].className = "material-icons"
timer.children[1].innerHTML = "60+ min"

const imgElement = document.querySelector(".image-container img")
imgElement.src = "assets/frozen-cheesecake-slice.jpg"

// Ingredients fixes
const ingredients = document.querySelector(".ingredients-container")
ingredients.style.backgroundColor = "#f9f9f9"

const ingredientsBottom = document.querySelector(".ingredients-list-bottom")
ingredientsBottom.children[0].remove()

const firstIngredientBottom = document.createElement("li")
firstIngredientBottom.innerHTML = "15st digistivetex"

const secondIngredientBottom = document.createElement("li")
secondIngredientBottom.innerHTML = "Lite smör"

ingredientsBottom.append(firstIngredientBottom, secondIngredientBottom)

const paste = document.querySelector(".ingredients-list-paste")
paste.children[2].innerHTML = "3tsk vaniljsocker"

const fourthPasteIngredient = document.createElement("li");
fourthPasteIngredient.innerHTML = "400g naturell philadelphiaost"
paste.appendChild(fourthPasteIngredient)

// Instructions fixes
const instructionsHeader = document.querySelector(".instructions-container h3")
instructionsHeader.classList.remove("shadow")

const instructionsList = document.querySelector(".instructions-list")
instructionsList.children[1].innerHTML = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke"
instructionsList.children[8].innerHTML = "Ställ in i frysen över natten."