// Return things to console
console.log("Internal JS console message. Hello, class!")
console.log(document)
// console.dir(document)

// Alerts
alert(`Hello world`) // Text box pop up message

window.onload = function(){
    alert(`Hello, class`)
}

// Write to elements by ID
document.getElementById("myH1").innerHTML = "I love Javascript (not really)"
document.getElementById("myParagraph").textContent = "Hi guys"

//Prompts
const student = prompt("What is your name? ")
console.log(student)
document.write(`<p>Hello, ${student}!`)
const messageElement = document.createElement("p");
messageElement.textContent = `Hello, ${student}`;
document.body.appendChild(messageElement)


// Styling page elements
document.body.style.color = "green"
document.body.style.backgroundColor = "black"
document.body.style.fontsize = "2em"

// Event Listeners
document.getElementById("myH1").addEventListener("click", function(){
    // details what will happen when we click the header
    document.getElementById("myH1").style.color = "red"
    alert(`NO diddy, stop touching me ${student}!`)
})

document.getElementById("myH1").addEventListener("mouseover", function(){
    document.getElementById("myH1").style.color = "black"
})

document.getElementById("myH1").addEventListener("dbclick", function(){
    document.getElementById("myH1").style.fontsize = "6em"
})

document.getElementById("myParagraph").addEventListener("mouseover", function(){
    document.getElementById("myParagraph").style.color = "white"
})

document.getElementById("myParagraph").addEventListener("click", function(){
    document.getElementById("myParagraph").style.color = "green"
})

document.getElementById("lightButton").addEventListener("click", function(){
    document.body.style.backgroundColor = "white"
})

document.getElementById("darkButton").addEventListener("click", function(){
    document.body.style.backgroundColor = "black"
})