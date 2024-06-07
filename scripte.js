// الحصول على مرجع الإطار والأزرار
const iframe = document.getElementById("board");
const home = document.getElementById("home");
const learn = document.getElementById("coding");
const playlist = document.getElementById("montage");
const tools = document.getElementById("tools");
const mysite = document.getElementById("mysite");

// إضافة event listeners للأزرار
home.addEventListener("click", function() {
  iframe.src = "pages/home.html";
});
mysite.addEventListener("click", function() {
  iframe.src = "pages/mysite.html";
});

learn.addEventListener("click", function() {
  iframe.src = "pages/learn.html";
});
playlist.addEventListener("click", function() {
    iframe.src = "pages/playlist.html";
  });
  
  tools.addEventListener("click", function() {
    iframe.src = "pages/tools.html";
  });







  function show(){
    document.getElementById('card').classList.add('open');
}

function hide(){
    document.getElementById('card').classList.remove('open');
}


function show2(){
  document.getElementById('card2').classList.add('open');
}

function hide2(){
  document.getElementById('card2').classList.remove('open');
}



