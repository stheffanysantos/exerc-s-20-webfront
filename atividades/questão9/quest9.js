function pesquisarPalavra() {
    const palavra = document.getElementById("palavra").value.toLowerCase();
    const texto = document.getElementById("texto").textContent.toLowerCase();
    const resultado = document.getElementById("resultado");

    
    const elementosDestacados = document.querySelectorAll(".highlight");
    elementosDestacados.forEach((elemento) => {
        elemento.classList.remove("highlight");
    });

    if (palavra.trim() === "") {
        resultado.textContent = "Por favor, digite uma palavra para pesquisar.";
        return;
    }

    const palavrasNoTexto = texto.split(" ");
    let contador = 0;

    palavrasNoTexto.forEach((palavraNoTexto, index) => {
        if (palavraNoTexto.includes(palavra)) {
            contador++;
            const elementoParaDestacar = document.createElement("span");
            elementoParaDestacar.textContent = palavraNoTexto + " ";
            elementoParaDestacar.classList.add("highlight");
            resultado.appendChild(elementoParaDestacar);
        } else {
            resultado.appendChild(document.createTextNode(palavraNoTexto + " "));
        }

        if (index === palavrasNoTexto.length - 1) {
            resultado.appendChild(document.createElement("br"));
        }
    });

    if (contador === 0) {
        resultado.textContent = "Nenhum resultado encontrado para a palavra: " + palavra;
    }
}