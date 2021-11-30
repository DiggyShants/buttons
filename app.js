const button = document.getElementById("button");
const par = document.getElementById("myPar")

button.addEventListener("click", function() {
    par.innerText = "Hello World!"
    
});


const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#fd5ee2", "#80ff00"];

const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

const btn2 = document.getElementById("btn2");
const img = document.getElementById("img")
btn2.addEventListener("click", function() {
 
        img.src="eyes.jpeg";

    
    
})