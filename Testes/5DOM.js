// Dessa forma eu importo funcoes uma por uma no mesmo documento
// import { boasVindas, ateLogo } from "./messages.mjs";
// Ou posso importar todas de uma vez dessa forma:
// import * as messages from "./messages.mjs";
console.log("Script carregado com sucesso!");
    // getElementById
console.log(document.getElementById("titulo").textContent);

// getElementsByClassName
let elementosPorClasse = document.getElementsByClassName("destaque");

console.log(elementosPorClasse[0].textContent);
console.log(elementosPorClasse[1].textContent);

// getElementByTagName
let elementPorTag = document.getElementsByTagName("p")
console.log(elementPorTag[0]);

// querySelector
console.log(document.querySelector(".destaque").textContent);

// querySelectorAll
let destaques = document.querySelectorAll(".destaque");
destaques.forEach(item => console.log(item.textContent));

// Events ou eventos
document.getElementById("meuBotao").addEventListener("click", function() {alert("Botao clicável");})

// boasVindas();
// para declarar a funçao importada...
// messages.ateLogo();