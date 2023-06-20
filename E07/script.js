function exercicio7() {
    opcao = prompt("Escolha uma opção:\n" +
        "1 - Soma\n" +
        "2 - Subtração\n" +
        "3 - Multiplicação\n" +
        "4 - Divisão\n" +
        "5 - Sair");
    if (opcao != '5') {
        valor1 = prompt("Digite o primeiro valor:");
        valor2 = prompt("Digite o segundo valor:");
    }
    switch (opcao) {
        case '1':
            soma(valor1, valor2);
            break;
        case '2':
            subtracao(valor1, valor2);
            break;
        case '3':
            multiplicacao(valor1, valor2);
            break;
        case '4':
            divisao(valor1, valor2);
            break;
        case '5':
            sair();
            break;
    }
}

function soma(valor1, valor2) {
    let resultado = Number(valor1) + Number(valor2);
    alert(resultado);
}

function subtracao(valor1, valor2) {
    let resultado = Number(valor1) - Number(valor2);
    alert(resultado);
}

function multiplicacao(valor1, valor2) {
    let resultado = Number(valor1) * Number(valor2);
    alert(resultado);
}

function divisao(valor1, valor2) {
    let resultado = Number(valor1) / Number(valor2);
    alert(resultado);
}

function sair() {
    alert("Até a próxima!");
}
