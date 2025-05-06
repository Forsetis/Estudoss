function getModal(id) {
    return document.getElementById(id);
}

function openModal(id) {
    const modal = getModal(id);
    modal.classList.add('active'); // Adiciona a classe active em vez de remover hidden
}

function closeModal(id) {
    const modal = getModal(id);
    modal.classList.remove('active'); // Remove a classe active ao fechar
}

console.log('JS funcionando');
