let inputCotacao = document.querySelector("#inputcotacao");
let btCalcularCotacao = document.querySelector("#btCalcularCotacao");
let resultadoCotacao = document.querySelector("#resultadoCotacao");

function calcularCotacao() {
  let cotacao = Number(inputCotacao.value);

  if (isNaN(cotacao) || cotacao <= 0) {
    resultadoCotacao.innerHTML = "Por favor, insira uma cotação válida.";
    return;
  }

  let aumento1 = cotacao * 1.01;
  let aumento2 = cotacao * 1.02;
  let aumento5 = cotacao * 1.05;
  let aumento10 = cotacao * 1.10;

  resultadoCotacao.innerHTML = `
    Cotação atual: R$ ${cotacao.toFixed(2)}<br>
    Com aumento de 1%: R$ ${aumento1.toFixed(2)}<br>
    Com aumento de 2%: R$ ${aumento2.toFixed(2)}<br>
    Com aumento de 5%: R$ ${aumento5.toFixed(2)}<br>
    Com aumento de 10%: R$ ${aumento10.toFixed(2)}
  `;
}

btCalcularCotacao.onclick = calcularCotacao;


// atividade 2

let inputPessoas = document.querySelector("#inputPessoas");
let btCalcularOmelete = document.querySelector("#btCalcularOmelete");
let resultadoOmelete = document.querySelector("#resultadoOmelete");

function calcularOmelete() {
  let pessoas = Number(inputPessoas.value);

  if (isNaN(pessoas) || pessoas <= 0) {
    resultadoOmelete.innerHTML = "Por favor, insira um número válido de pessoas.";
    return;
  }

  let ovos = pessoas * 2;
  let queijo = pessoas * 50;

  resultadoOmelete.innerHTML = `
    Para ${pessoas} pessoa(s):<br>
    Serão necessários ${ovos} ovos e ${queijo}g de queijo.
  `;
}

btCalcularOmelete.onclick = calcularOmelete;

// atividade 3

let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2 = document.querySelector("#inputNumero2");
let btCalcularOperacoes = document.querySelector("#btCalcularOperacoes");
let resultadoOperacoes = document.querySelector("#resultadoOperacoes");

function calcularOperacoes() {
  let num1 = Number(inputNumero1.value);
  let num2 = Number(inputNumero2.value);

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    resultadoOperacoes.innerText = "Por favor, insira números inteiros válidos.";
    return;
  }

  let soma = num1 + num2;
  let subtracao = num1 - num2;
  let multiplicacao = num1 * num2;
  let divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Não é possível dividir por zero.";

  resultadoOperacoes.innerHTML = 
    `Soma: ${soma} <br>` +
    `Subtração: ${subtracao} <br>` +
    `Multiplicação: ${multiplicacao} <br>` +
    `Divisão: ${divisao}`;
}

btCalcularOperacoes.onclick = calcularOperacoes;

// atividade 4


let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let qtdRefrigerantes = document.querySelector("#qtdRefrigerantes");
let btCalcularPedido = document.querySelector("#btCalcularPedido");
let resultadoPedido = document.querySelector("#resultadoPedido");

function calcularPedido() {
  let sabores = [sabor1.value, sabor2.value, sabor3.value, sabor4.value];
  let qtdRefri = Number(qtdRefrigerantes.value);

  
  if (isNaN(qtdRefri) || qtdRefri < 0) {
    resultadoPedido.innerText = "Informe uma quantidade válida de refrigerantes.";
    return;
  }

  let precoSabores = 12;
  let precoRefri = 7;

  let total = precoSabores * sabores.length + precoRefri * qtdRefri;

  resultadoPedido.innerHTML = `
    Sabores escolhidos: ${sabores.join(", ")}<br>
    Quantidade de refrigerantes: ${qtdRefri}<br>
    Total a pagar: R$ ${total.toFixed(2)}
  `;
}

btCalcularPedido.onclick = calcularPedido;




