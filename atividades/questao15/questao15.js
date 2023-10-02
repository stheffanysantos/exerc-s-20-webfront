function calculaTemperaturas() {
    var input = document.getElementById('temp').value;
    var temperaturas = input.split(',').map(Number);
    var total = 0;
    var menor = temperaturas[0];
    var maior = temperaturas[0];

    for (var i = 0; i < temperaturas.length; i++) {
        total += temperaturas[i];
        if (temperaturas[i] < menor) {
            menor = temperaturas[i];
        }
        if (temperaturas[i] > maior) {
            maior = temperaturas[i];
        }
    }

    var media = total / temperaturas.length;

    var resultado = "A menor temperatura é: " + menor;
    resultado += "<br>A maior temperatura é: " + maior;
    resultado += "<br>A média das temperaturas é: " + media;

    document.getElementById('resultado').innerHTML = resultado;
}