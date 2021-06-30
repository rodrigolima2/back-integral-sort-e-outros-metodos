const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const maiorString = cidades.reduce((acc, cur) => acc.length > cur.length ? acc : cur);

console.log(maiorString);