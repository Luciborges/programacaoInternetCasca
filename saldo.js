let h1texto = document.querySelector("#h1texto")
let ValorSaldo = document.querySelector("#ValorSaldo")
const botao = document.querySelector("#btsolucao")

function CalcularReajuste(){

    let num = Number(ValorSaldo.value);
    let reajuste = num * 0.01;
    let novoSaldo = num + reajuste;

    h1texto.textContent =  `Saldo original: R$ ${num.toFixed(2)} | Reajuste (1%): R$ ${reajuste.toFixed(2)} | Novo saldo: R$ ${novoSaldo.toFixed(2)}`;
}

botao.onclick = function() {
    CalcularReajuste()
}