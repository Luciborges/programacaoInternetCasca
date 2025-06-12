let valorquilo = document.querySelector("#valorquilo");
let totalquilo = document.querySelector("#totalquilo");
let btTotal = document.querySelector("#btTotal");
let resultado = document.querySelector("#resultado");

function calcularValorTotal() {
  let quilo = Number(valorquilo.value);
  let preco = Number(totalquilo.value);

  if (isNaN(quilo) || isNaN(preco) || quilo <= 0 || preco <= 0) {
    resultado.innerText = "Informe valores validos para o peso e o preco.";
    return;
  }

  let total = (quilo * preco).toFixed(2);
  resultado.innerText = "O valor total a pagar e R$ " + total;
}

btTotal.onclick = calcularValorTotal;
