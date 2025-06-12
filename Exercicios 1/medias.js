let inputNum1 = document.querySelector("#inputNum1");
let inputNum2 = document.querySelector("#inputNum2");
let inputNum3 = document.querySelector("#inputNum3");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularMedias() {
  let num1 = Number(inputNum1.value);
  let num2 = Number(inputNum2.value);
  let num3 = Number(inputNum3.value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultado.innerText = "Insira os tres numeros corretamente.";
    return;
  }

  let mediaAritmetica = (num1 + num2 + num3) / 3;
  let mediaPonderada = (num1*3 + num2*2 + num3*5) / 10;
  let somaMedias = mediaAritmetica + mediaPonderada;
  let mediaDasMedias = somaMedias / 2;

  resultado.innerHTML = 
    "Media aritmetica: " + mediaAritmetica.toFixed(2) + "<br>" +
    "Media ponderada: " + mediaPonderada.toFixed(2) + "<br>" +
    "Soma das medias: " + somaMedias.toFixed(2) + "<br>" +
    "Media das medias: " + mediaDasMedias.toFixed(2);
}

btCalcular.onclick = calcularMedias;
