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
const light = document.querySelector(".light"); // First element with class 'colors'

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

// Change header background color to a random RGB value

colors.addEventListener("click", function ran() {

    header.style.backgroundColor = randomInt();
    side.style.backgroundColor = randomInt();
    frame.style.backgroundColor = randomInt();
    section.style.backgroundColor = frame.style.backgroundColor;
});

light.addEventListener("click", function light() {

    header.style.backgroundColor = '#4b4b4b';
    side.style.backgroundColor = '#333333';
    frame.style.backgroundColor = '#969696';
    section.style.backgroundColor = '#969696';
});
rest.addEventListener("click", function () {

    header.style.backgroundColor = 'black';
    side.style.backgroundColor = '#1E3E62';
    frame.style.backgroundColor = '#0B192C';
    section.style.backgroundColor ='#0B192C';
});
close.addEventListener("click", function () {
    settings_bar.classList.remove("open");
});
const dd = document.querySelector(".hres")
dd.addEventListener("click", function(){
    const ff = document.querySelector(".no-select")
    ff.classList.toggle("ff")
})