// const viewMoreButtons = document.querySelectorAll('.view-more-expand, view-more-collapse');
//     viewMoreButtons.forEach(button => {
//         button.onclick = (event) => {
//             const holder = button.parentElement.parentElement;
//             holder.classList.toggle('view-more--expand');
//         }
//     });

document.addEventListener("DOMContentLoaded", () => {
    const viewMoreButton = document.querySelector(".view-more-toggle");
    const viewMoreContainer = document.querySelector(".view-more");

    if (!viewMoreButton || !viewMoreContainer) {
        console.error("Erro: Um dos elementos não foi encontrado.");
        return;
    }

    viewMoreButton.addEventListener("click", () => {
        console.log("Botão clicado!");
        viewMoreContainer.classList.toggle("view-more--expand");

        viewMoreButton.textContent = viewMoreContainer.classList.contains("view-more--expand") 
            ? "Mostrar Menos" 
            : "Mostrar Mais";
    });
});

