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
    alert(`Stop being silly ${student}!`)
})

document.getElementById("myH1").addEventListener("mouseover", function(){
    document.getElementById("myH1").style.color = "Green"
})

document.getElementById("myH1").addEventListener("dbclick", function(){
    document.getElementById("myH1").style.fontsize = "6em"
})

document.getElementById("myParagraph").addEventListener("mouseover", function(){
    document.getElementById("myParagraph").style.color = "white"
})

document.getElementById("myParagraph").addEventListener("click", function(){
    document.getElementById("myParagraph").style.color = "black"
})

document.getElementById("lightButton").addEventListener("click", function(){
    document.body.style.backgroundColor = "white"
    document.getElementById("myH1").style.color = "black"
    document.body.style.color = "black"

})

document.getElementById("darkButton").addEventListener("click", function(){
    document.body.style.backgroundColor = "black"
    document.getElementById("myH1").style.color = "white"
    document.body.style.color = "white"

})

//Variable Time!

let x; // declaring the variable without initializing
x = "hello";
console.log(x);
const y = 10 ;//declares and initializes and you can't change the value
let z = 3;

x = 4;
console.log(x);

z = true;
console.log(z);

let nombre = "VP Biruk";
console.log(nombre);
window.alert(`Hello your name is ${nombre}`);

let stuff = window.prompt("What is the best song ever? ");
document.write(`<p>The best song ever according to ${student} is ${stuff}`)

let online = false;
console.log(online)
console.log(`Online status ${online}`)

//Arithmetic operators
// +, -, /, *, **, %, ++, --

let students = 24;
console.log(students)
students += 1;
console.log(students)


//Data types

let classname = "WEB115";
console.log(classname)
console.log(typeof classname)

let pizza = "pizza";
pizza = Number(pizza)
console.log(pizza)




