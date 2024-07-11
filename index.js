// 1. What is the name of the recipe?
const recipeName = document.querySelector("#recipe-name")
console.log(recipeName.innerHTML)

// 2. What HTML tag is used to display the Recipe name?
console.log(recipeName.nodeName)

// 3. What is the font size of the paragraph tag with the class "description".
const descriptionParagraph = document.querySelector(".description")
console.log("font size: ", window.getComputedStyle(descriptionParagraph).fontSize)

// 4. What is the value of the alt atrribute on the image?
const imgElement = document.querySelector(".image-container img")
console.log(imgElement.alt)

// 5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
const imgObject = {
    height: imgElement.height,
    width: imgElement.width,
    url: imgElement.src
}
console.log(imgObject)

// 6. How many ingredients has the paste?
const paste = document.querySelector(".ingredients-list-paste")
console.log(paste.children.length)

// 7. Which is the forth element in the list containing the ingredients for the paste?
console.log(paste.children[3].innerHTML)

// 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
const instructions = document.querySelector(".instructions-list")
let instructionsArray = []

for (let i = 0; i < instructions.children.length; i++) {
    instructionsArray.push({
        order: i + 1,
        instructions: instructions.children[i].innerHTML.trim()
    })
}

console.log(instructionsArray)