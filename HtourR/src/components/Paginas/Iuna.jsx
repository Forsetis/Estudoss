import Navbar from '../navbar/index.jsx'
import Modal from '../modal/index.jsx';
import { useState } from 'react';
function Iuna({ aoVoltar }) {
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  return (
    <>
      <Navbar aoClicarInicio={aoVoltar}/>

      <div className="enunciado">
        <h1>Rio Claro - Iúna - ES</h1>
        <h2>A cidade das cachoeiras.</h2>
        <p>Rio Claro distrito de Iúna, na divisa do estado de Minas Gerais com o estado do Espírito Santo, localizada dentro da reserva do Parque Nacional do Caparaó abriga as cachoeiras mais bonitas do Brasil.</p>
        <p>Dentre esses locais, podemos destacar:</p>

        <h2>Poço das Antas</h2>
        <div className="block-content">
          <div className="resizing">
            <img src="/src/Antas.jpg" alt="Poço das Antas" onClick={() => setFotoAmpliada ("/src/Antas.jpg")}/>
          </div>
          <p className="side-text">Chega a ser difícil elencar qual das cachoeiras e poços é considerado o melhor, todos aqui publicados estarão em pé de igualdade. Logo, o Poço das Antas por exemplo, é um poço de águas cristalinas esverdeadas, ótimo para recarregar as energias.</p>
        </div>

        <h2>Poço do Egito</h2>
        <div className="block-content">
          <div className="resizing">
            <img src="/src/Egito.jpg" alt="Poço do Egito" onClick={() => setFotoAmpliada("/src/Egito.jpg")}/>
          </div>
          <p className="side-text">Também um corpo d'água incrível, com águas cristalinas, e toda uma estrutura pra receber os visitantes, desde passarelas de madeira pra chegar mais facilmente ao poço bem como estrutura de bar e música ao vivo aos finais de semana pra quem curte mais essa pegada.</p>
        </div>

        <h2>Cachoeira do Rogério</h2>
        <div className="block-content">
          <div className="resizing">
            <img src="/src/cachoeira-do-rogerio.webp" alt="Cachoeira do Rogério" onClick={() => setFotoAmpliada("/src/cachoeira-do-rogerio.webp")}/>
          </div>
          <p className="side-text">Outra opção que temos é a cachoeira do Rogério, "apenas mais um" corpo d'água de águas cristalinas.</p>
        </div>

        <div className="block-content">
          <p className="side-text">Por fim, o foco da região são os poços e cachoeiras, havendo uma diversidade de campings na região, desde algo mais raiz, camping com barracas, à camping com chalés ou pousadas. Recomendamos fortemente a visita nos meses de verão, uma vez que a nascente dessas águas se dá em altitude elevada e como são próximas, são corpos d'água bastante frios, logo, melhores de serem visitados no verão.</p>
        </div>
      </div>
      {fotoAmpliada && (
        <Modal src={fotoAmpliada} alt={"Imagem ampliada do destino"} aoFechar={() => setFotoAmpliada(null)}/>
    )}
    </>
  );
}

export default Iuna;
