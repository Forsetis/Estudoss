let temDesconto = true;
let freteGratis = false;

console.log(`Tem desconto ${temDesconto} \nTem frete gratis: ${freteGratis}`);

// Operador de igualdade (==) e igualdade estrita (===)

console.log("5" == 5);
console.log("5" === 5);

// Aplicando casting = converter a string em um number
console.log(Number("5") === 5);

// Operador &&
if (temDesconto && freteGratis) {
    console.log(`Vou comprar`);
} else {
    console.log(`Vou esperar`);
};

// Operador ou (||)
if (temDesconto || freteGratis) {
    console.log(`É, até que da pra comprar`)
} else {
    console.log(`Vou esperar`);
};

// Operador não (!)
if (!freteGratis) {
    console.log(`Vou ter que pagar o frete...`)
} else {
    console.log(`Frete grátis, que bom!`)
};

// Exemplo final
let vontadeDeComprar = true;
if (temDesconto && freteGratis && vontadeDeComprar) {
    console.log(`Vou comprar com certeza!`)
} else if (temDesconto || freteGratis || vontadeDeComprar) {
    console.log("Vou pensar se vou comprar ou não")
} else {
    console.log(`Vou comprar não, vou deixar pra amanhã`)
};