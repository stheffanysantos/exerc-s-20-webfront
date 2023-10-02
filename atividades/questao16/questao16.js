
function main(){

    var celcius = document.querySelector(".celcius").value
    var resultCelc = document.querySelector(".resultadoCelcius")

    var fahren = document.querySelector(".farehn").value
    var resltFahren = document.querySelector(".resultadoFarehn")



    if (! isNaN(celcius || fahren)){

        function celsiusParaFahrenheit(celcius) {
            var fahrenheit = (celcius * 9/5) + 32;
            return fahrenheit;
        }
        resultCelc.textContent = celsiusParaFahrenheit(celcius)
        
        function fahrenheitParaCelsius(fahrenheit) {
            var celcius = (fahrenheit - 32) * 5/9;
            return celcius
        }
        resltFahren.textContent = fahrenheitParaCelsius(fahren)
    } else {
        alert("Um dos dois não é um número")
    }
}