
function trocarCores() {
    var cor = ["red", "orange", "yellow", "green", "blue", "indigo", "violet","light-pink"];
    var corRandom = cor[Math.floor(Math.random() * cor.length)];
    document.querySelector(".trocarCores").style.backgroundColor = corRandom;
}