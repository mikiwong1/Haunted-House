var pipe = document.getElementById("cut");
var loosen = document.getElementById("loosen");
var lazy = document.getElementById("lazy");
var staircase = document.getElementById("staircase");
var elevator = document.getElementById("elevator");
var staircase2 = document.getElementById("staircase2");
var elevator2 = document.getElementById("elevator2");
var stairfail = document.getElementById("retrystairs");

setTimeout(function loose(){
    loosen.style.visibility = "visible";
}, 8200);

setTimeout(function cut(){
    pipe.style.visibility = "visible";
}, 8400);


setTimeout(function lazier(){
    lazy.style.visibility = "visible";
}, 8600);

setTimeout(function stairs(){
    staircase.style.visibility = "visible";
}, 8200);

setTimeout(function elevate(){
    elevator.style.visibility = "visible";
}, 8400);

setTimeout(function stairs2(){
    staircase2.style.visibility = "visible";
}, 8200);

setTimeout(function elevate2(){
    elevator2.style.visibility = "visible";
}, 8200);

setTimeout(function fall(){
    stairfail.style.visibility = "visible";
}, 11110);