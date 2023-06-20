function exercicio6() {
    let acao = 'S';
    let frutas = [];
    let laticinios = [];
    let doces = [];
    let qtdProdutos = 0;
    let produtos = {
        1: frutas,
        2: laticinios,
        3: doces
    };

    while (acao === 'S') {
        let opcao = prompt("Digite a opção: 1 - Adicionar produto / 2 - Remover produto");

        if (opcao === '1') {
            let nomeProduto = prompt("Qual o nome do produto que você deseja adicionar?");
            let categoriaProduto = prompt("Em que categoria o produto se encaixa: frutas (1), laticínios (2) ou doces (3)?").toUpperCase();

            produtos[categoriaProduto].push(nomeProduto);
            qtdProdutos++;

            alert("Os produtos da sua lista de compras são:\n\n" +
                "Frutas: " + frutas + "\n" +
                "Laticínios: " + laticinios + "\n" +
                "Doces: " + doces);
        } else if (opcao === '2') {
            if (qtdProdutos < 1) {
                alert("Não existem produtos na lista.");
            } else {
                alert("Os produtos da sua lista de compras são:\n\n" +
                    "Frutas: " + frutas + "\n" +
                    "Laticínios: " + laticinios + "\n" +
                    "Doces: " + doces);

                let nomeProdutoRemover = prompt("Qual o nome do produto que você deseja remover?");
                let categoriaProduto = prompt("Em que categoria o produto se encaixa: frutas (1), laticínios (2) ou doces (3)?").toUpperCase();

                let produtosCategoria = produtos[categoriaProduto];
                let indexProduto = produtosCategoria.indexOf(nomeProdutoRemover);

                if (indexProduto === -1) {
                    alert("Produto não localizado.");
                } else {
                    produtosCategoria.splice(indexProduto, 1);
                    qtdProdutos--;
                    alert("Produto removido.");
                }
            }
        } else {
            alert("Opção inválida.");
        }
        acao = prompt("Deseja realizar mais alguma ação (S/N)?").toUpperCase();
        alert("Os produtos da sua lista de compras são:\n\n" +
            "Frutas: " + frutas + "\n" +
            "Laticínios: " + laticinios + "\n" +
            "Doces: " + doces);
    }
}
