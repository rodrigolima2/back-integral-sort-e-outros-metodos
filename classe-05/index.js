const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const temVendaProibida = palavras.some(x => x === "cerveja" || x === "vodka");

if (temVendaProibida) {
    console.log("revise sua lista, joão. Possui bebida com venda proibida!");
} else {
    console.log("tudo certo, vamos as compras!");
}