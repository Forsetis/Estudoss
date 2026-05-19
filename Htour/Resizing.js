const modal = document.getElementById('meuModal');
const imgModal = document.getElementById('imgModal');
const botaoFechar = document.querySelector('.modal-fechar');

document.addEventListener('click', function(event){
    if (event.target.hasAttribute('data-click-effect')) {
        modal.style.display = 'flex';
        imgModal.src = event.target.src
        imgModal.alt = event.target.alt
    }
});

botaoFechar.addEventListener('click', function() {
    modal.style.display = 'none'
});

modal.addEventListener ('click', function(event){
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});