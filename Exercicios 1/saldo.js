let inputSaldo = document.querySelector("#inputSaldo");
let btReajustar = document.querySelector("#btReajustar");
let resultadoReajuste = document.querySelector("#resultadoReajuste");

function reajustarSaldo() {
  let saldo = Number(inputSaldo.value);

  if (isNaN(saldo) || saldo < 0) {
    resultadoReajuste.innerText = "Insira um saldo valido.";
    return;
  }

  let saldoReajustado = saldo * 1.01;

  resultadoReajuste.innerText = "Saldo reajustado: R$ " + saldoReajustado.toFixed(2);
}

btReajustar.onclick = reajustarSaldo;
