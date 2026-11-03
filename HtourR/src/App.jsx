import { useState } from 'react'
import './App.scss'
import SaoTome from './components/Paginas/Saotome.jsx';
import Santiago from './components/Paginas/Santiago.jsx';
import Marataizes from './components/Paginas/Marataizes.jsx';
import Iuna from './components/Paginas/Iuna.jsx';
import Navbar from './components/navbar/index.jsx';
import About from './components/Paginas/About.jsx';
import Contact from './components/Paginas/Contact.jsx';
import Packages from './components/Paginas/Packages.jsx';

function App() {
  const [telaAtiva, setTelaAtiva] = useState('introducao');
  const [textoGaleria, setTextoGaleria] = useState({
    titulo: "Clique em uma foto para saber mais:",
    descricao: "Selecione nossos destinos para ver mais detalhes da viagem",
    idTela: null
  });
  const dadosLocais = {
    saotome: {
      titulo: "São Tomé das Letras",
      descricao: "A famosa Casa da Pirâmide e o pôr do sol místico no topo das montanhas de Minas Gerais.",
      idTela: "pagina-saotome"
    },
    marataizes: {
      titulo: "Marataízes",
      descricao: "Vista aérea do portal do camping, com acesso direto para as praias e lagoas capixabas.",
      idTela: "pagina-marataizes"
    },
    iuna: {
      titulo: "Iúna - Poço do Egito",
      descricao: "Águas transparentes e esverdeadas onde é possível enxergar as pedras no fundo do poço.",
      idTela: "pagina-iuna"
    },
    santiago: {
      titulo: "Santiago do Chile",
      descricao: "Ambiente arborizado com arranha-céus modernos sob o fundo imponente da Cordilheira dos Andes nevada.",
      idTela: "pagina-santiago"
    }
  };
  const lidarComCliqueFoto = (chaveLocal) => {
    setTextoGaleria(dadosLocais[chaveLocal]);
  };
 
  if (telaAtiva === 'introducao') {
    return (
      <div class="introTitle">
      <h1>Este é um site de estudo em React + Vite:</h1>
      <p>Logo é um site utilizado para testar recursos funcionais através de estados (useState) e SEM FINS COMERCIAIS.</p>
      <button className='btn-ver' onClick={() => setTelaAtiva('homepage')}>Homepage</button>
    </div>
    );
  }

  if (telaAtiva === 'pagina-saotome') {
    return <SaoTome aoVoltar={() => setTelaAtiva('homepage')} />;
  }
  if (telaAtiva === 'pagina-santiago') {
    return <Santiago aoVoltar={() => setTelaAtiva('homepage')} />;
  }
  if (telaAtiva === 'pagina-marataizes') {
    return <Marataizes aoVoltar={() => setTelaAtiva('homepage')} />;
  }
  if (telaAtiva === 'pagina-iuna') {
    return <Iuna aoVoltar={() => setTelaAtiva('homepage')} />;
  }

  if (telaAtiva === 'sobre') {
    return <About setTelaAtiva={setTelaAtiva} />;
  }

  if (telaAtiva === 'pacotes') {
    return <Packages setTelaAtiva = {setTelaAtiva} />;
  }

  if (telaAtiva === 'contato') {
    return <Contact setTelaAtiva = {setTelaAtiva} />;
  }
  
return (
  <>
    <Navbar aoClicarInicio={() => setTelaAtiva('introducao')} 
      aoClicarSobre={() => setTelaAtiva('sobre')} 
      aoClicarPacotes={() => setTelaAtiva('pacotes')}
      aoClicarContato={() => setTelaAtiva('contato')}/>    
    
    <div className="enunciado">
      <h1>Bora Viajar?</h1>
      <h2>Porque viajar não é só se deslocar de um espaço físico ao outro, é viver, criar memórias e tornar aquele momento, eterno.</h2>
      <p>Já pensou em viajar e não se preocupar com nada? Já pensou em viajar e sua única preocupação ser apenas a sua diversão? Não? Então vem com a Htour que a gente vai te proporcionar essa experiência.</p>
    </div>
    <div className="divisor_line"></div>
    <div className="exemplos">
      <h1>Veja alguns dos lugares os quais a gente já foi:</h1>
      <div className="conteudointerativo">
        <div className="grid">
          <div className="box">
            <img 
                src="/Casa_da_Pirâmide_em_São_Tome_das_Letras.jpg" 
                alt="Piramide de São Thomé das Letras" 
                onClick={() => lidarComCliqueFoto('saotome')}
              />
          </div>
          <div className="box">
              <img 
                src="/portal-topo.webp" 
                alt="Vista aérea do portal do camping" 
                onClick={() => lidarComCliqueFoto('marataizes')}
              />
            </div>
            <div className="box">
              <img 
                src="/iuna_poco do egito_1_tadeu bianconi.jpg" 
                alt="Foto para um dos poços de Iúna" 
                onClick={() => lidarComCliqueFoto('iuna')}
              />
            </div>
            <div className="box">
              <img 
                src="/Santiago.jpg" 
                alt="Foto da cidade de Santiago do Chile" 
                onClick={() => lidarComCliqueFoto('santiago')}
              />
            </div>
        </div>
        <div className="caixaLateral" style={{display: 'block'}}>
          <h2>{textoGaleria.titulo}</h2>
          <p>{textoGaleria.descricao}</p>
          {textoGaleria.idTela && (
            <button
            className="btn-ver"
            onClick={()=> setTelaAtiva(textoGaleria.idTela)}>Ver Mais Detalhes</button>
          )}
        </div>
      </div>
    </div>
    
    
    <div className="divisor_line"></div>
    <div className="pacotes">
      <p>E aí, ficou com vontade? É só clicar nas nossas fotos pra conhecer mais ou <a href="#">aqui</a></p> 
    </div>
  </>
);
}

export default App
