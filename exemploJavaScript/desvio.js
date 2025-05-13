let inputnota1Bim = document.querySelector("#nota1Bim");
let inputnota2Bim = document.querySelector("#nota2Bim");
let btAprovacao = document.querySelector("#btAprovacao");
let h3Resultado = document.querySelector ("#h3Resultado");

function calcularMediaAluno(){

    let nota1 = Number(inputnota1Bim.value);
    let nota2 = Number(inputnota2Bim.value);

    let media = (nota1 + nota2) / 2;

    if (media >= 60){
        h3Resultado.textContent = "O aluno esta aprovado!!!"

    }else{
        h3Resultado.textContent = "o aluno esta Reprovado!!!"

    }
}

btAprovacao.onclick = function(){

    calcularMediaAluno();
}