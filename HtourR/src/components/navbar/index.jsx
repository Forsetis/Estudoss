function Navbar ({ aoClicarInicio, aoClicarSobre, aoClicarPacotes, aoClicarContato }) {
    return (
        <header>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#" onClick={(e) => {e.preventDefault(); if (aoClicarInicio) aoClicarInicio();}}>Inicio</a></li>
                    <li><a href="#" onClick={(e) => {e.preventDefault(); if (aoClicarSobre) aoClicarSobre();}}>Sobre</a></li>
                    <li><a href="#" onClick={(e) => {e.preventDefault(); if (aoClicarPacotes) aoClicarPacotes();}}>Pacotes</a></li>
                    <li><a href="#" onClick={(e) => {e.preventDefault(); if (aoClicarContato) aoClicarContato();}}>Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;