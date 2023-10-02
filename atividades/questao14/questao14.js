"use strict";

function impares() {
    var numeros = document.querySelector(".numeros")

    for (var x = 1; x <= 50; x++){
        if (x % 2 != 0){
            numeros.textContent = x
            console.log(x);
        }
    }
}