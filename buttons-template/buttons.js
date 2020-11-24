//Jason R.
//Lab button 1.0.
//23-09-2020.

//Variabelen voor de buttons die in de html body staan.
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

//Variabelen voor de images die in de html body staan.
var bigImage = document.getElementById("image1");
var tinyImage = document.getElementById("image2");

//Variabelen voor de counters voor hoeveel keer op de knop word gedrukt.
var count1 = 0;
var count2 = 0;
var count3 = 0;

button1.addEventListener('click',function(){
    button1.innerHTML = count1++;//Elke keer als er op 1 van de buttons worden gedrukt gaat er steeds 1 bij komen.
    bigImage.src = "images/bg1.jpg";
    tinyImage = "images/1.jpg";
});

button2.addEventListener('click',function(){
    button2.innerHTML = count2++;//Zie regel 20!.
    bigImage.src = "images/bg2.jpg";
    tinyImage = "images/2.jpg";
});

button3.addEventListener('click',function(){
    button3.innerHTML = count3++;//Zie regel 20!.
    bigImage.src = "images/bg3.jpg";
    tinyImage = "images/3.jpg";
});