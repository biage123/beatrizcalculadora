const g = 9.81;

function calcular() {
    const v = Number(document.querySelector("#raioM").value); // Raio S
    const θ = Number(document.querySelector("#velocidadeangular").value); // Velocidade angular
    const t = Number(document.querySelector("#tempos").value); // Tempo S
    const x0 = Number(document.querySelector("#faseinicial").value); // Fase inicial
    

   

    

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular);
})