const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((acc, cur) => acc > cur ? acc : cur);

console.log(maiorNumero);