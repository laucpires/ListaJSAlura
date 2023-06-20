function exercicio5() {
    let resposta = 'S';
    let frutas = [];
    let laticinios = [];
    let doces = [];

    while (resposta == 'S' || resposta == "SIM") {
        let nomeProduto = prompt("Qual o nome do produto?");
        let categoriaProduto = prompt("Em que categoria o produto se encaixa: frutas, laticínios ou doces?").toUpperCase();
        if (categoriaProduto == "FRUTAS") {
            frutas.push(nomeProduto);
        }
        else if (categoriaProduto == "LATICÍNIOS" || categoriaProduto == "LATICINIOS") {
            laticinios.push(nomeProduto);
        }
        else if (categoriaProduto == "DOCES") {
            doces.push(nomeProduto);
        }
        resposta = prompt("Deseja adicionar uma comida na sua lista de compras, sim ou não?").toUpperCase();
    }
    alert("Os produtos da sua lista de compras são:" + "\n" + "Frutas: " + frutas + "\n" + "Laticínios: " + laticinios + "\n" + "Doces: " + doces);
}
