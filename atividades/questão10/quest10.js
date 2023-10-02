function validar() {



let nota;

  nota = parseFloat(document.getElementById("nota").value);

  if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Valor inválido. Por favor, digite uma nota entre zero e dez.");
  } else {
    alert ("Valor válido!")
  }
 

}