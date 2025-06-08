let inputX = document.querySelector("#valorX");
let inputY = document.querySelector("#valorY");
let inputZ = document.querySelector("#valorZ");
let btfinalizar = document.querySelector("#btfinalizar");
let resultado = document.querySelector("#resultado");


function classificarTriangulos() {
    let x = Number(inputX.value);
    let y = Number(inputY.value);
    let z = Number(inputZ.value);

    if (x <= 0 || y <= 0 || z <= 0) {
        resultado.innerText = "Os lados devem ser maiores que zero.";
        return;
    }

    if (x + y > z && x + z > y && y + z > x) {
        if (x === y && y === z) {
            resultado.innerText = "Triangulo Equilatero";
        } else if (x === y || x === z || y === z) {
            resultado.innerText = "Triangulo Isosceles";
        } else {
            resultado.innerText = "Triangulo Escaleno";
        }
    } else {
        resultado.innerText = "Os valores informados nao formam um triangulo.";
    }
    
}
btfinalizar.onclick = classificarTriangulos;

// atividade 2

let inputpeso = document.querySelector("#inputpeso")
let inputaltura = document.querySelector("#inputaltura")
let btresultado = document.querySelector("#btresultado")
let resultadoIMC = document.querySelector("#ResultadoIMC")

function CalcularIMS(){

    let peso = Number(inputpeso.value);
    let altura = Number(inputaltura.value);

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (peso <= 0 || altura <= 0) {
        resultadoIMC.innerText = "Peso e altura devem ser maiores que zero.";
        return;
    }

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    resultadoIMC.innerHTML = `IMS: ${imc.toFixed(2)} - ${classificacao}`;
}

btresultado.onclick = CalcularIMS;

// atividade 3

let inputAno = document.querySelector("#anoCarro");
let inputValor = document.querySelector("#valorTabela");
let btCalcularImposto = document.querySelector("#btCalcularImposto");
let resultadoImposto = document.querySelector("#resultadoImposto");

function calcularImposto() {
    let ano = Number(inputAno.value);
    let valorStr = inputValor.value.replace(/\./g, '').replace(',', '.');
    let valor = Number(valorStr);

    let taxa = ano < 1990 ? 0.01 : 0.015;
    let imposto = valor * taxa;


    if (ano <= 0 || valor <= 0) {
        resultadoImposto.innerText = "Ano e valor devem ser maiores que zero.";
        return;
    }

    
    resultadoImposto.innerHTML = `Ano: ${ano}<br>
   Valor do carro: ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>
    Taxa: ${(taxa * 100).toFixed(1)}%<br>
    Imposto a pagar: ${imposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}


btCalcularImposto.onclick = calcularImposto;

// atividade 4

let inputCodigo = document.querySelector("#codigoCargo");
let inputSalario = document.querySelector("#salarioAtual");
let btCalcularSalario = document.querySelector("#btCalcularSalario");
let CalculoSalario = document.querySelector("#CalculoSalario");

function calcularSalario() {
    let codigo = Number(inputCodigo.value);
    let salario = Number(inputSalario.value);

    if (codigo <= 0 || salario <= 0) {
        resultado.innerText = "Código e salário devem ser maiores que zero.";
        return;
    }

    let percentual;

    if (codigo === 101) {
        percentual = 0.10;
    } else if (codigo === 102) {
        percentual = 0.20;
    } else if (codigo === 103) {
        percentual = 0.30;
    } else if (codigo === 104){
        percentual = 0.40;
    } else {
    CalculoSalario.innerText = "Código inválido.";
    return;
}

    let aumento = salario * percentual;
    let novoSalario = salario + aumento;


    CalculoSalario.innerHTML = `Código: ${codigo}<br>
    Salário Atual: ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br>
    Percentual de aumento: ${(percentual * 100).toFixed(0)}%<br>
    Aumento: ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br>
    Novo Salário: ${novoSalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
}

btCalcularSalario.onclick = calcularSalario;

// atividade 5
let inputSaldo = document.querySelector("#inputsaldo");
let btVerCredito = document.querySelector("#btVerCredito");
let resultadoCredito = document.querySelector("#resultadoCredito");

function calcularCredito() {
  let saldo = Number(inputSaldo.value);
  let credito = 0;
  let mensagem = "";

  if (isNaN(saldo) || saldo <= 0) {
    resultado.innerHTML = "Por favor, insira um saldo valido maior que zero.";
    return;}

  if (saldo <= 200) {
    mensagem = "Saldo medio: R$ " + saldo.toFixed(2) + "<br>Nenhum credito disponivel.";
  } else if (saldo <= 400) {
    credito = saldo * 0.2;
    mensagem = "Saldo medio: R$ " + saldo.toFixed(2) + "<br>Credito concedido: R$ " + credito.toFixed(2);
  } else if (saldo <= 600) {
    credito = saldo * 0.3;
    mensagem = "Saldo medio: R$ " + saldo.toFixed(2) + "<br>Credito concedido: R$ " + credito.toFixed(2);
  } else {
    credito = saldo * 0.4;
    mensagem = "Saldo medio: R$ " + saldo.toFixed(2) + "<br>Credito concedido: R$ " + credito.toFixed(2);
  }

  resultadoCredito.innerHTML = mensagem;
}

btVerCredito.onclick = calcularCredito;

// atividade 6

let inputCodigoLanche = document.querySelector("#inputCodigoLanche");
let inputQuantidade = document.querySelector("#inputQuantidade");
let btCalcularLanches = document.querySelector("#btCalcularLanches");
let TotalGeral = document.querySelector("#TotalGeral");

function calcularPreco() {
  let codigo = Number(inputCodigoLanche.value);
  let quantidade = Number(inputQuantidade.value);
  let cardapio = {
    1: 11.00,
    2: 8.50,
    3: 8.00,
    4: 9.00,
    5: 10.00,
    6: 4.50
  };
  
  if (isNaN(codigo) || !cardapio[codigo]) {
    TotalGeral.innerHTML = "Por favor, insira um código válido.";
    return;
  }
  
  if (isNaN(quantidade) || quantidade <= 0) {
    TotalGeral.innerHTML = "Por favor, insira uma quantidade válida maior que zero.";
    return;
  }
  
  let total = cardapio[codigo] * quantidade;
  TotalGeral.innerHTML = `Código: ${codigo} <br> Quantidade: ${quantidade} <br> Total a pagar: R$ ${total.toFixed(2)}`;
}

btCalcularLanches.onclick = calcularPreco;

// atividade 7
let inputPreco = document.querySelector("#inputPreco");
let inputCondicao = document.querySelector("#inputCondicao");
let btresultadoVendas = document.querySelector("#btresultadoVendas");
let resultadoVendas = document.querySelector("#ResultadoVendas");

function calcularVendas() {
  let preco = Number(inputPreco.value);
  let condicao1 = inputCondicao.value.trim().toLowerCase();
  let condicao = condicao1.replace(/[.,;]/g, '');

  if (isNaN(preco) || preco <= 0) {
    resultadoVendas.innerText = "Insira um preco valido.";
    return;
  }
 
  let mensagem = "";

  if (condicao === "a") {
    let valorFinal = preco * 0.9;
    mensagem += "Voce escolheu a vista em dinheiro ou cheque.<br>Valor a pagar: R$ " + valorFinal.toFixed(2);
  } else if (condicao === "b") {
    let valorFinal = preco * 0.85;
    mensagem += "Voce escolheu a vista no cartao de credito.<br>Valor a pagar: R$ " + valorFinal.toFixed(2);
  } else if (condicao === "c") {
    mensagem += "Voce escolheu pagar em duas vezes sem juros.<br>Valor total: R$ " + preco.toFixed(2) +
      " (2x de R$ " + (preco / 2).toFixed(2) + ")";
  } else if (condicao === "d") {
    let valorFinal = preco * 1.1;
    mensagem += "Voce escolheu pagar em duas vezes com 10% de juros.<br>Valor total: R$ " + valorFinal.toFixed(2) +
      " (2x de R$ " + (valorFinal / 2).toFixed(2) + ")";
  } else {
    mensagem = "Condicao de pagamento invalida. Use A, B, C ou D.";
  }

  resultadoVendas.innerHTML = mensagem;
}

btresultadoVendas.onclick = calcularVendas;

// atividade 8
let inputNivel = document.querySelector("#inputNivel");
let inputHoras = document.querySelector("#inputHoras");
let btCalcularSal = document.querySelector("#btCalcularSal");
let ValoresSalarios = document.querySelector("#ValoresSalarios");

function calcularSal() {
  let nivel = Number(inputNivel.value);
  let horas = Number(inputHoras.value);

  if (![1, 2, 3].includes(nivel)) {
    ValoresSalarios.innerText = "Nivel invalido. Informe 1, 2 ou 3.";
    return;
  }

  if (isNaN(horas) || horas <= 0) {
    ValoresSalarios.innerText = "Informe uma quantidade valida de horas.";
    return;
  }

  let valorHora;
  if (nivel === 1) valorHora = 12;
  else if (nivel === 2) valorHora = 17;
  else valorHora = 25;

  let salario = valorHora * horas * 4.5;

  ValoresSalarios.innerHTML = 
    `Professor Nivel ${nivel} com ${horas} horas/semana.<br>` +
    `Salario mensal: R$ ${salario.toFixed(2)}`;
}

btCalcularSal.onclick = calcularSal;

