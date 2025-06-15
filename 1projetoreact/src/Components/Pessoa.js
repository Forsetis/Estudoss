function Cabeça () {
    Cerebro();
    Nariz();
    Boca();
}

function Pessoa () {
    Cabeça();
    Tronco();
    Braços();
    Pernas();
}

function Cabeça () {
    return (
        <section>
            <Cerebro />
            <Nariz />
            <Boca />
        </section>
    )
}

function Pessoa () {
    return (
        <section>
            <Cabeça />
            <Tronco />
            <Braços />
            <Pernas />
        </section>
    )
}

function App () {
    <main>
        <Pessoa />
    </main>
}