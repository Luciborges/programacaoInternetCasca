let inputLargura = document.querySelector("#inputLargura");
let inputComprimento = document.querySelector("#inputComprimento");
let btCalcularArea = document.querySelector("#btCalcularArea");
let resultadoArea = document.querySelector("#resultadoArea");

function calcularArea() {
  let largura = Number(inputLargura.value);
  let comprimento = Number(inputComprimento.value);

  if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
    resultadoArea.innerText = "Por favor, insira valores validos para largura e comprimento.";
    return;
  }

  let area = largura * comprimento;
  resultadoArea.innerText =
   `A area do terreno e: ${area.toFixed(2)} M ao quadrado`;
}

btCalcularArea.onclick = calcularArea;

// atividade 2


let inputCavalos = document.querySelector("#inputCavalos");
let btCalcularFerraduras = document.querySelector("#btCalcularFerraduras");
let resultadoFerraduras = document.querySelector("#resultadoFerraduras");

function calcularFerraduras() {
  let cavalos = Number(inputCavalos.value);

  if (isNaN(cavalos) || cavalos <= 0) {
    resultadoFerraduras.innerText = "Por favor, insira um numero valido de cavalos.";
    return;
  }

  let ferraduras = cavalos * 4;
  resultadoFerraduras.innerText = `Serao necessarias ${ferraduras} ferraduras para ${cavalos} cavalos.`;
}

btCalcularFerraduras.onclick = calcularFerraduras;

// atividade 3

let inputPaes = document.querySelector("#inputPaes");
let inputBroas = document.querySelector("#inputBroas");
let btCalcularVendas = document.querySelector("#btCalcularVendas");
let resultadoVendas = document.querySelector("#resultadoVendas");

function calcularVendas() {
  let qtdPaes = Number(inputPaes.value);
  let qtdBroas = Number(inputBroas.value);

  if (isNaN(qtdPaes) || qtdPaes < 0 || isNaN(qtdBroas) || qtdBroas < 0) {
    resultadoVendas.innerText = "Informe quantidades validas de paes e broas.";
    return;
  }

  let total = qtdPaes * 0.12 + qtdBroas * 1.50;
  let poupanca = total * 0.10;

  resultadoVendas.innerHTML = `
    Total arrecadado: R$ ${total.toFixed(2)}<br>
    Valor a guardar na poupanca (10%): R$ ${poupanca.toFixed(2)}
  `;
}

btCalcularVendas.onclick = calcularVendas;


// atividade 4

let inputNome = document.querySelector("#inputNome");
let inputIdade = document.querySelector("#inputIdade");
let btCalcularDias = document.querySelector("#btCalcularDias");
let resultadoDias = document.querySelector("#resultadoDias");

function calcularDiasDeVida() {
  let nome = inputNome.value.trim();
  let idade = Number(inputIdade.value);

  if (nome === "" || isNaN(idade) || idade < 0) {
    resultadoDias.innerText = "Por favor, preencha um nome valido e uma idade correta.";
    return;
  }

  let dias = idade * 365;
  resultadoDias.innerText = `${nome}, voce ja viveu ${dias} dias`;
}

btCalcularDias.onclick = calcularDiasDeVida;

// atividade 5

let inputPrecoLitro = document.querySelector("#inputPrecoLitro");
let inputValorPagamento = document.querySelector("#inputValorPagamento");
let btCalcularLitros = document.querySelector("#btCalcularLitros");
let resultadoLitros = document.querySelector("#resultadoLitros");

function calcularLitros() {
  let precoLitro = Number(inputPrecoLitro.value);
  let valorPagamento = Number(inputValorPagamento.value);

  if (isNaN(precoLitro) || precoLitro <= 0 || isNaN(valorPagamento) || valorPagamento <= 0) {
    resultadoLitros.innerText = "Por favor, insira valores validos e maiores que zero.";
    return;
  }

  let litros = valorPagamento / precoLitro;

  resultadoLitros.innerText = `Voce conseguiu colocar ${litros.toFixed(2)} litros de gasolina no tanque.`;
}

btCalcularLitros.onclick = calcularLitros;


// atividade 6

let inputPeso = document.querySelector("#inputPeso");
let btCalcularConta = document.querySelector("#btCalcularConta");
let resultadoConta = document.querySelector("#resultadoConta");

function calcularConta() {
  let peso = Number(inputPeso.value);

  if (isNaN(peso) || peso <= 0) {
    resultadoConta.innerText = "Por favor, insira um peso valido maior que zero.";
    return;
  }

  let precoPorQuilo = 12;
  let total = peso * precoPorQuilo;

  resultadoConta.innerText = `Peso do prato: ${peso.toFixed(2)} kg
  Valor a pagar: R$ ${total.toFixed(2)}`;
}


btCalcularConta.onclick = calcularConta;


// atividade 7

let inputDia = document.querySelector("#inputDia");
let inputMes = document.querySelector("#inputMes");
let btCalcularDiasAno = document.querySelector("#btCalcularDiasAno");
let resultadoDiasAno = document.querySelector("#resultadoDiasAno");

function calcularDias() {
  let dia = Number(inputDia.value);
  let mes = Number(inputMes.value);

  if (
    isNaN(dia) || dia < 1 || dia > 30 ||
    isNaN(mes) || mes < 1 || mes > 12
  ) {
    resultadoDiasAno.innerText = "Insira um dia (1-30) e um mes (1-12) validos.";
    return;
  }

  let totalDias = (mes - 1) * 30 + dia;

  resultadoDiasAno.innerText = `Ja se passaram ${totalDias} dias desde o inicio do ano.`;
}

btCalcularDiasAno.onclick = calcularDias;

// atividade 8

let inputPequena = document.querySelector("#inputPequena");
let inputMedia = document.querySelector("#inputMedia");
let inputGrande = document.querySelector("#inputGrande");
let btCalcularTotal = document.querySelector("#btCalcularTotal");
let resultadoTotal = document.querySelector("#resultadoTotal");

function calcularTotal() {
  let pequena = Number(inputPequena.value);
  let media = Number(inputMedia.value);
  let grande = Number(inputGrande.value);

  if (
    isNaN(pequena) || pequena < 0 ||
    isNaN(media) || media < 0 ||
    isNaN(grande) || grande < 0
  ) {
    resultadoTotal.innerText = "Insira valores validos (0 ou mais) para todas as quantidades.";
    return;
  }

  let total = (pequena * 10) + (media * 12) + (grande * 15);
  resultadoTotal.innerText = `Valor total arrecadado: R$ ${total.toFixed(2)}`;
}

btCalcularTotal.onclick = calcularTotal;

// atividade 9

let inputX1 = document.querySelector("#inputX1");
let inputY1 = document.querySelector("#inputY1");
let inputX2 = document.querySelector("#inputX2");
let inputY2 = document.querySelector("#inputY2");
let btCalcularDistancia = document.querySelector("#btCalcularDistancia");
let resultadoDistancia = document.querySelector("#resultadoDistancia");

function calcularDistancia() {
  let x1 = Number(inputX1.value);
  let y1 = Number(inputY1.value);
  let x2 = Number(inputX2.value);
  let y2 = Number(inputY2.value);

  if (
    isNaN(x1) || isNaN(y1) ||
    isNaN(x2) || isNaN(y2)
  ) {
    resultadoDistancia.innerText = "Insira todos os valores corretamente.";
    return;
  }

  let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  resultadoDistancia.innerText = `A distancia entre os pontos e ${distancia.toFixed(2)}`;
}

btCalcularDistancia.onclick = calcularDistancia;


// atividade 10


let inputDias = document.querySelector("#inputDias");
let btConverterTempo = document.querySelector("#btConverterTempo");
let resultadoTempo = document.querySelector("#resultadoTempo");

function converterTempo() {
  let dias = Number(inputDias.value);

  if (isNaN(dias) || dias < 0) {
    resultadoTempo.innerText = "Insira um numero valido de dias.";
    return;
  }

  let anos = Math.floor(dias / 360);
  let resto = dias % 360;
  let meses = Math.floor(resto / 30);
  let diasRestantes = resto % 30;

  resultadoTempo.innerText = "Tempo sem acidentes: " 
  + anos + " ano(s), " + meses + " mes(es) e " 
  + diasRestantes + " dia(s).";
}

btConverterTempo.onclick = converterTempo;

// atividade 11

let inputSalario = document.querySelector("#inputSalario");
let btCalcularSalario = document.querySelector("#btCalcularSalario");
let resultadoSalario = document.querySelector("#resultadoSalario");

function calcularSalario() {
  let salario = Number(inputSalario.value);

  if (isNaN(salario) || salario <= 0) {
    resultadoSalario.innerText = "Insira um salario valido.";
    return;
  }

  let salarioComAumento = salario * 1.15;
  let salarioFinal = salarioComAumento * 0.92;

  resultadoSalario.innerHTML =
    "Salario inicial: R$ " + salario.toFixed(2) + "<br>" +
    "Salario com aumento: R$ " + salarioComAumento.toFixed(2) + "<br>" +
    "Salario final com desconto: R$ " + salarioFinal.toFixed(2);
}

btCalcularSalario.onclick = calcularSalario;


// atividade 12

let inputNumero = document.querySelector("#inputNumero");
let btSeparar = document.querySelector("#btSeparar");
let resultadoSeparar = document.querySelector("#resultadoSeparar");

function separarNumero() {
  let num = Number(inputNumero.value);

  if (isNaN(num) || num < 0 || num > 999) {
    resultadoSeparar.innerText = "Insira um numero inteiro valido (0 a 999).";
    return;
  }

  let centena = Math.floor(num / 100);
  let dezena = Math.floor((num % 100) / 10);
  let unidade = num % 10;

  resultadoSeparar.innerHTML = 
    "CENTENA = " + centena + "<br>" +
    "DEZENA = " + dezena + "<br>" +
    "UNIDADE = " + unidade;
}

btSeparar.onclick = separarNumero;


// atividade 13

let inputRaio = document.querySelector("#inputRaio");
let btCalcularAreaPizza = document.querySelector("#btCalcularAreaPizza");
let resultadoAreaPizza = document.querySelector("#resultadoAreaPizza");

function calcularArea() {
  let raio = Number(inputRaio.value);

  if (isNaN(raio) || raio <= 0) {
    resultadoAreaPizza.innerText = "Insira um valor valido para o raio.";
    return;
  }

  let pi = 3.14;
  let area = pi * raio * raio;

  resultadoAreaPizza.innerText = "Area da pizza: " + area.toFixed(2);
}

btCalcularAreaPizza.onclick = calcularArea;

// atividade 14

let inputConta = document.querySelector("#inputConta");
let btCalcularDivisao = document.querySelector("#btCalcularDivisao");
let resultadoDivisao = document.querySelector("#resultadoDivisao");

function calcularDivisao() {
  let total = Number(inputConta.value);

  if (isNaN(total) || total <= 0) {
    resultadoDivisao.innerText = "Insira um valor valido para a conta.";
    return;
  }

  let parteCarlos = Math.floor(total / 3);
  let parteAndre = Math.floor(total / 3);
  let parteFelipe = total - (parteCarlos + parteAndre);

  resultadoDivisao.innerHTML =
    "Carlos deve pagar: R$ " + parteCarlos.toFixed(2) + "<br>" +
    "Andre deve pagar: R$ " + parteAndre.toFixed(2) + "<br>" +
    "Felipe deve pagar: R$ " + parteFelipe.toFixed(2);
}

btCalcularDivisao.onclick = calcularDivisao;






