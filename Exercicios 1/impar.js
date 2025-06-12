let inputNumero = document.querySelector("#inputNumero");
let btVerificar = document.querySelector("#btVerificar");
let resultadoImpar = document.querySelector("#resultadoImpar");

function verificarImpar() {
  let num = Number(inputNumero.value);

  if (isNaN(num)) {
    resultadoImpar.innerText = "Insira um numero valido.";
    return;
  }

  if (num % 2 !== 0) {
    resultadoImpar.innerText = "O numero " + num + " é impar.";
  } else {
    resultadoImpar.innerText = "O numero " + num + " não é impar.";
  }
}

btVerificar.onclick = verificarImpar;
