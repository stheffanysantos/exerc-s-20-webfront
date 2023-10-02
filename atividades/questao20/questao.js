function calculaSomatorio(){
    var soma = 0;
    var contador = 0;

while (contador < 20) {
    var valor = parseFloat(prompt("Digite um valor real:"));
    soma += valor;
    contador++;
}

console.log("A soma dos valores é: " + soma);

}