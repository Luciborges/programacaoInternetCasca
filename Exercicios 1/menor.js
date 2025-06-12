let inputVal1 = document.querySelector("#inputVal1");
let inputVal2 = document.querySelector("#inputVal2");
let inputVal3 = document.querySelector("#inputVal3");
let inputVal4 = document.querySelector("#inputVal4");
let btEncontrarMenor = document.querySelector("#btEncontrarMenor");
let resultadoMenor = document.querySelector("#resultadoMenor");

function encontrarMenor() {
  let val1 = Number(inputVal1.value);
  let val2 = Number(inputVal2.value);
  let val3 = Number(inputVal3.value);
  let val4 = Number(inputVal4.value);

  if (isNaN(val1) || isNaN(val2) || isNaN(val3) || isNaN(val4)) {
    resultadoMenor.innerText = "Insira quatro valores validos.";
    return;
  }

  let menor = val1;

  if (val2 < menor) menor = val2;
  if (val3 < menor) menor = val3;
  if (val4 < menor) menor = val4;

  resultadoMenor.innerText = "O menor valor e: " + menor;
}

btEncontrarMenor.onclick = encontrarMenor;
