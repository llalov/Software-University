"use strict";
function calcExp () {
    var inputExp = document.getElementById("input").value;
    inputExp = inputExp.replace("/[^0-9+-//*]+/g, ''");
    var result = document.getElementById("output");
    result.innerHTML += eval(inputExp);
}
function clearBox() {
    document.getElementById("output").innerHTML = "";
}