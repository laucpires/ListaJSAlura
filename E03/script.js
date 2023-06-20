function exercicio3() {
    let area = prompt("Área de front-end (1) ou back-end (2)?");
    if (area == 1) {
        linguagem = prompt("Escolha uma linguagem front-end: React (1) ou Vue (2).");
        switch (linguagem) {
            case '1':
                alert("Ótima escolha! React é irado.");
                break;
            case '2':
                alert("Ótima escolha! Vue é irado.");
                break;
        }
        opcao = prompt("Você prefere: se especializar na área escolhida (1) ou seguir se desenvolvendo para se tornar fullstack (2)?");
        switch (opcao) {
            case '1':
                alert("Show. Boa sorte!");
                break;
            case '2':
                maisUma = 'S';
                while (maisUma == 'S') {
                    outraLinguagem = prompt("Qual outra linguagem você gostaria de aprender?");
                    alert(`Legal. A linguagem ${outraLinguagem} é massa.`);
                    maisUma = prompt("Mais alguma linguagem?").toUpperCase();
                }
                break;
        }
    }
    else if (area == 2) {
        switch (linguagem) {
            case '1':
                alert("Ótima escolha! C# é irado.");
                break;
            case '2':
                alert("Ótima escolha! Java é irado.");
                break;
        }
    }
}
