var pipe = document.getElementById("cut");
var loosen = document.getElementById("loosen");
var lazy = document.getElementById("lazy");

setTimeout(function loose(){
    loosen.style.visibility = "visible";
}, 8200);

setTimeout(function cut(){
    pipe.style.visibility = "visible";
}, 8400);


setTimeout(function lazier(){
    lazy.style.visibility = "visible";
}, 8600);