const btn = document.getElementById("btn");
const side = document.getElementById("side");
const settings = document.getElementById("settings");
const settings_bar = document.querySelector(".settings"); // First element with class 'settings'
const colors = document.querySelector(".colors"); // First element with class 'colors'
const header = document.getElementsByTagName("header")[0]; // Access the first header element
const frame = document.querySelector(".frame"); // First element with class 'colors'
const section = document.getElementsByTagName("section")[0]; // Access the first header element
const close = document.getElementById("close");
const rest = document.querySelector(".rest"); // First element with class 'colors'

// Toggle the side menu
btn.addEventListener("click", function () {
    side.classList.toggle("open");
});

// Function to change iframe source
function go(src) {
    document.getElementById('frame').src = `${src}`;
}

// Generate a random integer between 0 and 255
function randomInt() {
    var red =  Math.random() * 200;
    var green =  Math.random() * 200 ;
    var blue =  Math.random() * 200 ;
    return `rgb(${red}, ${green}, ${blue})`
}

// Toggle settings bar visibility
if (settings && settings_bar) {
    settings.addEventListener("click", function () {
        settings_bar.classList.toggle("open");
    });
}


close.addEventListener("click", function () {
    settings_bar.classList.remove("open");
});
const dd = document.querySelector(".hres")
dd.addEventListener("click", function(){
    const ff = document.querySelector(".no-select")
    ff.classList.toggle("ff")
})