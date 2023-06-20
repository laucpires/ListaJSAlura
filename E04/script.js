function exercicio4() {
    let numero = 5;
    for (let i = 0; i < 3; i++) {
        let numeroUsuario = prompt("Digite o número do chute:");
        if (numeroUsuario == numero) {
            alert("Parabéns! Você acertou o número!");
            break;
        }
        else {
            if (i < 2) {
                alert("Tente novamente...");
            }
            else {
                alert("Número 5.");
            }
        }
    }
}
