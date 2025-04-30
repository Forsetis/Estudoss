// Tipos de dados do JS

// Tipo de dado: Boolean ou booleano
let estaChovendo = true;
console.log("Está chovendo? " + estaChovendo);

if (estaChovendo) {
    console.log("Está chovendo!")
} else {
    console.log("Nao está chovendo.")
}

// Tipo de dado: Number / Números

let numero = 25.5;
console.log(typeof numero);

// Tipo de dado: BigInt = É quando existe um dado numerico muito grande que NAO pode ser arrendondado

let numeroPi = 314159265358979323846n;
console.log(typeof numeroPi);

// Tipo de dado: NULL

let usuario = {
    nome: "Joao",
    sobrenome: null
}

console.log(usuario.sobrenome);

// Tipo de dado: Undefined

console.log(usuario.idade);

// Tipo de dado: Strings

// Quebra de linha
console.log("Olá, \nMundo!");

console.log("\"Olá, Mundo!\"");

// Tipo de dado: SYMBOL

let email = Symbol();
usuario[email] = "joao@joao.com";

console.log(usuario[email]);

// Tipo de dado: Objeto

const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicação: 1943,
    genero: "Ficção"
};

console.log(livro.titulo)

// Tipo de dado: Funções. (Funcões SÃO objetos)

function saudacao() {
    console.log("Olá!")
}

saudacao();

saudacao.idioma = "Português";
console.log(saudacao.idioma);

// Tipo de dado: Template Literal

console.log(`O livro de ${livro.genero}, ${livro.titulo},foi escrito por ${livro.autor} e publicado em ${livro.anoPublicação}`);

// Tipo de dado: Arrays (Vetores)

const filmes = ["Titanic", "Vingadores", "Matrix"];
console.log(filmes);
console.log(filmes[1]);

// Método forEach
const arr = ["Uva", "Banana", "Abacaxi", "Pêra"];
arr.forEach(function (item, index) {
    console.log(index, item);
});

// Método map
listaCompras = arr.map(function () {
    return "Comprado"
})
console.log(listaCompras);

listaCompras2 = arr.map(function (item) {
    if (item === "Abacaxi") {
        return "Comprado";
    } else {
        return item;
    }
});
console.log(listaCompras2);