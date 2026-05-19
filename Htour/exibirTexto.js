function exibirTexto (destino) {
    const caixa = document.getElementById('exibirTexto');
    caixa.style.display = 'block';

    const informacoes = {
        'saotome': {
            titulo: 'São Tomé das Letras',
            texto: 'Conheça essa cidade mística, cheia de historias, segredos e eventos sobrenaturais',
            link: 'saotome.html'
        },
        'marataizes': {
            titulo: 'Marataízes',
            texto: 'Venha conhecer o maior camping a beira-mar da américa latina, cheio de atividades na alta temporada, e muita paz, tranquilidade e sossego na baixa temporada.',
            link: 'Marataizes.html'
        },
        'iuna': {
            titulo: 'Iúna',
            texto: 'Iuna, cidade circundante do Parque Nacional do Caparaó, tendo os poços mais limpos e cristalinos de tons esverdeados e as mais lindas cachoeiras do Brasil.',
            link: 'Iuna.html'
        },
        'santiago': {
            titulo: 'Santiago do Chile', 
            texto: 'Capital chilena, cheia de arranha céus, proxima da cordilheira dos Andes e tem como atraçoes pistas de ski, teleférico e alguns dos melhores rooftops da América do Sul.',
            link: 'Santiago.html'
        },
        'homepage': {
            titulo: 'Homepage', 
            texto: 'nada',
            link: 'homepage.html'
        }
    };

    const info = informacoes [destino]
        caixa.innerHTML = `
        <h2> ${info.titulo}</h2> 
        <p>${info.texto}</p>
        <a href="${info.link}" class="btn-ver">Ver mais</a>`;

}