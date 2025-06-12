btTroco.onclick = function() {
    let total = Number(document.querySelector("#total").value);
    let pago = Number(document.querySelector("#pago").value);
    let resultado = document.querySelector("#resultado");

    if (isNaN(total) || isNaN(pago) || total <= 0 || pago <= 0) {
        resultado.textContent = "Preencha os valores corretamente.";
        return;
    }

    let troco = pago - total;

    if (troco < 0) {
        resultado.textContent = `Valor insuficiente. Faltam R$ ${Math.abs(troco).toFixed(2)}.`;
    } else {
        resultado.textContent = `Troco: R$ ${troco.toFixed(2)}.`;
    }
};