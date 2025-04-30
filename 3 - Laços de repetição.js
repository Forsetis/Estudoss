//for
const produtos = ["Camiseta", "Tênis", "Calça", "Boné"];
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

// While
let numero = 0
while (numero < 5) {
    console.log("Número:", numero);
    numero++;
}

// Exemplo While
const estoque = [5, 3, 4, 2];
let index = 0;

while (index < produtos.length) {
    console.log(`${produtos[index]} - ${estoque[index]} unidades`);
    index++
};

// Break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}