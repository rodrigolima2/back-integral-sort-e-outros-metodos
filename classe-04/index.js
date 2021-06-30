const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const invalido = palavras.some(x => x.length > 5);

if (invalido) {
    console.log("Existe palavra inválida");
} else {
    console.log("Array validado");
}