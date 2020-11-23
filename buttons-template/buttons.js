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

var text = 0;

function waarde0(){
    bigImage.src = "images/bg1.jpg";//De image veranderd zodra er op de button word gedrukt.
    tinyImage.src = "images/1.jpg";//De image veranderd zodra er op de button word gedrukt.
    text = 0;
    document.getElementById("button1").value = text++;
    
}

function waarde1(){
    text.textContent = 1;//Locale variabele voor deze functie,
    bigImage.src = "images/bg2.jpg";//De image veranderd zodra er op de button word gedrukt.
    tinyImage.src = "images/2.jpg";//De image veranderd zodra er op de button word gedrukt.
}

function waarde2(){
    text.textContent = 1;//Locale variabele voor deze functie,
    bigImage.src = "images/bg3.jpg";//De image veranderd zodra er op de button word gedrukt.
    tinyImage.src = "images/3.jpg";//De image veranderd zodra er op de button word gedrukt.
}
