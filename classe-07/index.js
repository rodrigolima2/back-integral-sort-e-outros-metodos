const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]

const usuariosCom18a65anos = usuarios.filter(x => x.idade >= 18 && x.idade <= 65);
console.log(usuariosCom18a65anos);

const todosHabilitados = usuariosCom18a65anos.every(x => x.habilitado);

if (todosHabilitados) {
    console.log("Todos passaram no teste");
} else {
    console.log("Todos precisam estar habilitados");
}