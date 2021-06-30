const numeros = [0, 122, 4, 6, 7, 8, 44];

const saoPares = numeros.every(x => x % 2 == 0);

if (saoPares) {
    console.log("Array válido");
} else {
    console.log("Array inválido");
}