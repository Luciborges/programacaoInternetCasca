let inputValor1 = document.querySelector("#inputValor1");
let inputValor2 = document.querySelector("#inputValor2");
let btComparar = document.querySelector("#btComparar");
let resultadoMaior = document.querySelector("#resultadoMaior");

function mostrarMaior() {
  let val1 = Number(inputValor1.value);
  let val2 = Number(inputValor2.value);

  if (isNaN(val1) || isNaN(val2)) {
    resultadoMaior.innerText = "Insira dois valores validos.";
    return;
  }

  if (val1 > val2) {
    resultadoMaior.innerText = "O maior valor e: " + val1;
  } else if (val2 > val1) {
    resultadoMaior.innerText = "O maior valor e: " + val2;
  } else {
    resultadoMaior.innerText = "Os dois valores sao iguais: " + val1;
  }
}

btComparar.onclick = mostrarMaior;
