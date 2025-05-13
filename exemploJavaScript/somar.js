

let inputNumber1 = document.querySelector("#inputNumber1");
let inputNumber2 = document.querySelector("#inputNumber2");
let btSomar = document.querySelector("#btSomar");
let resultado = document.querySelector("#resultado");

btSomar.onclick = function() {
    let num1 = Number(inputNumber1.value);
    let num2 = Number(inputNumber2.value);
    
    let soma = num1 + num2; resultado.textContent = "Resultado do troco: " + troco;
}
