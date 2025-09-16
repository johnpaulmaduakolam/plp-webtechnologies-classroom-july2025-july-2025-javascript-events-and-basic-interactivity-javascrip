// Event Handling

// Click Event Handling

// Get Element
let textChange = document.getElementById("textChange");
let changeBtn = document.getElementById("changeBtn");

// add event handling
changeBtn.addEventListener("click", () => {
    textChange.textContent = "Welcome to Our Website!";
    textChange.style.color = "blue";
});

// mouseover event
let over = document.getElementById("over");
let overBtn = document.getElementById("overBtn");

overBtn.addEventListener("mouseover", () => {
    over.style.color = "Blue";
});


// mouseout event
overBtn.addEventListener("mouseout", () => {
    over.style.color = "black";
});


// show message when button clicked
// Get Element

let showBtn = document.getElementById("showBtn");
let message = document.getElementById("msg");

showBtn.addEventListener("click", () => {
    message.textContent = "You clicked the show button!"
});

// Part 2: Building Interactive Elements

// Dark Mode Toggle Button

// Get Element

let toggleBtn = document.getElementById("toggleBtn");
let body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Switch to light mode";
        toggleBtn.style.backgroundColor = "yellow";
        toggleBtn.style.color = "#222";
    } else {
        toggleBtn.textContent = "Switch to dark mode";
        toggleBtn.style.backgroundColor = "#222";
        toggleBtn.style.color = "#fff";

    };
});


