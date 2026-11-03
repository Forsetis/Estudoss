import Navbar from '../navbar/index.jsx'
import Modal from '../modal/index.jsx';
import { useState } from 'react';
function Santiago({ aoVoltar }) {
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  return (
    <>
      <Navbar aoClicarInicio={aoVoltar}/>

      <div className="enunciado">
        <h1>Santiago</h1>
        <h2>Capital do chile, cidade moderna e aos pés dos andes</h2>
        <p>Santiago do Chile, a capital chilena, cidade moderna cheia de shoppings, atividades, e atrações também na parte de ecoturismo, um lugar que vale muito a pena conhecer.</p>
        <p>Dentre esses locais, podemos destacar:</p>

        <h2>Farellones</h2>
        <div className="block-content">
          <div className="resizing">
            <img src="/src/Farellones.webp" alt="Farellones" onClick={() => setFotoAmpliada("/src/Farellones.webp")}/>
          </div>
          <p className="side-text">Um dos destinos mais conhecidos e cobiçados para visitação pelos turistas, Farellones é uma das pistas mais famosas de ski da região, tendo como ápice de sua atividade entre julho e setembro, podendo estender a temporada até para outubro, dependendo da precipitação de neve do período.</p>
        </div>

        <h2>Cajón del maipo</h2>
        <div className="block-content">
          <div className="resizing">
            <img src="/src/Cajon.jpg" alt="Cajón_Del_Maipo" onClick={() => setFotoAmpliada("/src/Cajon.jpg")}/>
          </div>
          <p className="side-text">Cajón del maipo, assim é chamado o maior reservatório de água doce de Santiago, responsável pelo abastecimento da água da cidade. Formada pelo degelo das montanhas próximas, na Cordilheira dos Andes.</p>
        </div>

        <h2>Funicular</h2>
        <div className="block-content">
          <div className="resizing">
            <img src="/src/Funicular.webp" alt="Funicular" onClick={() => setFotoAmpliada("/src/Funicular.webp")}/>
          </div>
          <p className="side-text">A miniferrovia mais famosa de Santiago do Chile, responsável por levar e trazer visitantes dos pés ao topo do morro San Cristóbal.</p>
        </div>

        <h2>Centro histórico de Santiago</h2>
        <div className="block-content">
          <div className="resizing">
            <img src="/src/Centro historico.jpg" alt="Centro_histórico" onClick={() => setFotoAmpliada("/src/Centro historico.jpg")}/>
          </div>
          <p className="side-text">No centro histórico de Santiago, podemos ver construções com arquitetura belíssima de época, no centro da imagem, o edifício da bolsa de valores chilena. Além dela, em outras vielas, é possível encontrar bares em construções de mesma arquitetura, trazendo um ambiente aconchegante e retrô.</p>
        </div>

        <h2>Edifício Sky Costanera</h2>
        <div className="block-content">
          <div className="resizing">
            <img src="/src/Sky Costanera.jpg" alt="Sky_Costanera" onClick={() => setFotoAmpliada("/src/Sky Costanera.jpg")}/>
          </div>
          <p className="side-text">No centro da imagem, o Edifício SkyCostanera, o maior edifício da américa latina com o melhor rooftop para apreciar a vista da cidade e da cordilheira. Nas condições climáticas ideais, terá um dos melhores pores do sol do Chile.</p>
        </div>

        <div className="block-content">
          <p className="side-text">Por fim existem muitos outros destinos, para saber mais, contate com um dos nossos <a href="#">consultores</a>.</p>
        </div>
      </div>
      {fotoAmpliada && (
        <Modal src={fotoAmpliada} alt={"Imagem ampliada do destino"} aoFechar={() => setFotoAmpliada(null)}/>
    )}
    </>
  );
}

export default Santiago;
