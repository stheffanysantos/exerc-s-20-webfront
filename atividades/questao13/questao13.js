"use strict"

function palidroMia(){
    var palindromo = document.querySelector(".palindromo").value;
    var resultado = document.querySelector(".resultado");

    var palindromo2 = palindromo.split("").reverse().join("");

    if (palindromo == palindromo2){
        resultado.textContent = "É um palindromo"
    } else{
        resultado.textContent = "Não é palindromo"
    }
}