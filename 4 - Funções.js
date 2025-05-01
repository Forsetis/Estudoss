function dizerOla() {
    console.log(`Olá, dev!`)
}

dizerOla();

// Função Exemplo 2
function cumprimentar(nome, sobrenome) {
    console.log(`Olá, ${nome} ${sobrenome}!`)
}

cumprimentar("Hugo", "Santos");

// Utilizando o return
function dobrar(numero) {
    return numero * 2;
}
const resultado = dobrar(4);
console.log(resultado);

// High Order Functions (HOFs)/ Funções de Ordem Superior
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(function (numero) {
    return numero * 2;
});

console.log(dobrados);

// Arrow Functions
// Numa função normal seria:
function somar(a, b) {
    return a + b;
}
// Numa Arrow Function seria:
const somarArrow = (a, b) => a + b;
console.log(somarArrow)

const triplicar = numeros.map(numero => numero * 3);
console.log(triplicar);