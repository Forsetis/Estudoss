import Navbar from "../navbar";
function Packages ({setTelaAtiva}) {
    return (
        <>
        <Navbar aoClicarInicio={() => setTelaAtiva('introducao')}
            aoClicarSobre={() => setTelaAtiva('sobre')} 
            aoClicarPacotes={() => {}} 
            aoClicarContato={() => setTelaAtiva('contato')}
        />
        <div className="enunciado">
            <div className="block-content">
                <div className="resizing">
                    <img src="/Casa_da_Pirâmide_em_São_Tome_das_Letras.jpg" alt="São_Tomé_das_Letras" data-click-effect/>
                </div>
                <div className="package-info">
                    <h1 className="side-text">Pacote São Tomé das letras.</h1>
                    <div className="btn-ver">Ver Pacote</div>
                </div>
            </div>
            <div className="block-content">
                <div className="resizing">
                    <img src="/Santiago.jpg" alt="Santiago" data-click-effect/>
                </div>
                <div className="package-info">
                    <h1 className="side-text">Pacote Santiago.</h1>
                    <div className="btn-ver">Ver Pacote</div>
                </div>
            </div>
            <div className="block-content">
                <div className="resizing">
                    <img src="/portal-topo.webp" alt="Marataízes" data-click-effect/>
                </div>
                <div className="package-info">
                    <h1 className="side-text">Pacote Marataízes.</h1>
                    <div className="btn-ver">Ver Pacote</div>
                </div>
            </div>
            <div className="block-content">
                <div className="resizing">
                    <img src="/Egito.jpg" alt="Iúna" data-click-effect/>
                </div>
                <div className="package-info">
                    <h1 className="side-text">Pacote Iúna.</h1>
                    <div className="btn-ver">Ver Pacote</div>
                </div>  
            </div>
        </div>
        <div className="divisor_line"></div>
        </>
    );
}
export default Packages