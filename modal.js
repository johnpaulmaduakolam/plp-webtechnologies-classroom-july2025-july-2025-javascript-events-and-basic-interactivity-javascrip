// Modal Popup

// Get Element
let myModal = document.getElementById("myModal");
let openbtn = document.getElementById("open-modal");
let closebtn = document.getElementById("closeModal");
let content = document.getElementById("content");



openbtn.addEventListener("click", () => {
    content.classList.toggle("show") = "translateY(0)";
});

closebtn.addEventListener("click", () => {
    content.classList.toggle("show") = "translateY(0)";
});