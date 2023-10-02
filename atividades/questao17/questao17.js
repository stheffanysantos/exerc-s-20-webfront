
function forImparPar() {
    var pares = 0;
    var impares = 0;

for (var i = 0; i < 10; i++) {
    var numero = prompt("Digite um número inteiro:");

    if (numero % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Quantidade de números pares: " + pares);
console.log("Quantidade de números ímpares: " + impares);
}