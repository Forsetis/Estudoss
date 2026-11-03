import Navbar from '../navbar/index.jsx'
import Modal from '../modal/index.jsx';
import { useState } from 'react';
function Marataizes({ aoVoltar }) {
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  return (
    <>
      <Navbar aoClicarInicio={aoVoltar}/>

      <div className="enunciado">
        <h1>Marataízes - ES</h1>
        <h2>Cidade litorânea.</h2>
        <p>Marataízes, cidade litorânea de mares calmos, praias bonitas no litoral capixaba.</p>
        <p>Nossas recomendações seriam:</p>

        <h2>Camping do siri</h2>
        <div className="block-content">
          <div className="resizing">
            <img src="/src/portal-topo.webp" alt="Camping_do_Siri" onClick={() => setFotoAmpliada("/src/portal-topo.webp")}/>
          </div>
          <p className="side-text">O maior camping à beira-mar do Brasil, com 150 mil m² de área para os campistas e diversas atividades nas épocas de alta temporada, incluindo shows ao vivo na praia (que é o nosso quintal), shows à noite, tirolesa, almoço na cozinha do camping dentre outros. Oferecemos ainda como opção de pernoite o camping (sendo o usuário responsável por trazer seu equipamento), estrutura de chalés e de kitnets.</p>
        </div>

        <h2>Lagoa do Siri</h2>
        <div className="block-content">
          <div className="resizing">
            <img src="/src/LagoaDoSiri.jpg" alt="Lagoa_do_Siri" onClick={() => setFotoAmpliada("/src/LagoaDoSiri.jpg")}/>
          </div>
          <p className="side-text">Uma lagoa de água doce e escura, de frente para a praia, cercada de restaurantes e que os turistas costumam frequentar justamente pela experiência de estar num bar molhado. Além disso, a lagoa conta com pequenos peixes.</p>
        </div>
      </div>
      {fotoAmpliada && (
        <Modal src={fotoAmpliada} alt={"Imagem ampliada do destino"} aoFechar={() => setFotoAmpliada(null)}/>
    )}
    </>
  );
}

export default Marataizes;
