import Navbar from '../navbar/index.jsx'
import Modal from '../modal/index.jsx';
import { useState } from 'react';
function SaoTome({ aoVoltar }) {
    const [fotoAmpliada, setFotoAmpliada] = useState(null);

  return (
    <>
        <Navbar aoClicarInicio={aoVoltar}/>
        <div className="enunciado">
            <h1>São Thomé das Letras</h1>
            <h2>A cidade mística no coração das Minas Gerais.</h2>
                <p>São Thomé das Letras, a cidade no coração das Minas gerais, envolta em mistérios, misticismo e aparições, é um otimo local para o esoterismo, descanso, ecoturismo, campings e bares temáticos.</p>
                <p>Dentre esses locais, podemos destacar:</p>
            <h2>A Casa da Piramide</h2>
                <div className="block-content">
                    <div className="resizing">
                        <img src="/src/Casa_da_Pirâmide_em_São_Tome_das_Letras.jpg" alt="Casa_da_Pirâmide_em_São_Tome_das_Letras" onClick={() => setFotoAmpliada("/src/Casa_da_Pirâmide_em_São_Tome_das_Letras.jpg")}/>
                    </div>
                    <p className="side-text">Um dos destinos mais conhecidos e frequentados de São Tomé, a Casa da Piramide costuma ser frequentada por turistas que desejam ver o pör do sol, ficando sentados geralmente no seu teto de pedra contemplando o sol.</p>
                </div>
            <h2>Lago da Pedreira</h2>
                <div className="block-content">
                    <div className="resizing">
                        <img src="/src/lago.jpg" alt="Lago da Pedreira" onClick={() => setFotoAmpliada("/src/lago.jpg")}/>
                    </div>
                    <p className="side-text">O lago da pedreira é um dos destinos que vale a pena ser conhecido, apesar de haver a proibição do nado ou mergulho no lago, ainda assim é uma bela visão devido a tonalidade da água.</p>
                </div>
            <h2>Cachoeira Véu da Noiva</h2>
                <div className="block-content">
                    <div className="resizing">
                        <img src="/src/Cachoeira veu da noiva.jpg" alt="Cachoeira Véu da Noiva" onClick={() => setFotoAmpliada("/src/Cachoeira veu da noiva.jpg")}/>
                    </div>
                    <p className="side-text">A cachoeira Véu da Noiva já nos oferece um local de uso para nado e mergulho de fora segura para os banhistas e tamém é um dos pontos mais procurados pelo ecoturismo na região.</p>
                </div>
            <h2>Vale das Borboletas</h2>
                <div className="block-content">
                    <div className="resizing">
                        <img src="/src/Vale da Borboletas.jpg" alt="Cachoeira Véu da Noiva" onClick={() => setFotoAmpliada("/src/Vale da Borboletas.jpg")}/>
                    </div>
                    <p className="side-text">Já o Vale das Borboletas, alem de oferecer a cachoeira, ainda oferece alguns poços, os quais voce pode escolher onde ficar, alem de lojinhas típicas na entrada e restaurantes.</p>
                </div>
            <h2>Rota do Cogumelo Azul</h2>
                <div className="block-content">
                    <div className="resizing">
                        <img src="/src/Pub-Cogumelo-Azul-2.jpg" alt="Rota do Cogumelo Azul" onClick={() => setFotoAmpliada("/src/Pub-Cogumelo-Azul-2.jpg")}/>
                    </div>
                    <p className="side-text">Enquanto isso, para aqueles que curtem uma noite boêmia, existe a "Rota do Cogumelo Azul", um tour feito por conta própria em 4 bares temáticos de São Thomé das Letras. Iniciando na toca do cogumelo azul e ganhando um passaporte e o primeiro carimbo, o objetivo é visitar os três bares restantes conseguindo os demais carimbos e conquistando assim, alguns brindes.</p>
                </div>
            <div className="block-content">
                <p className="side-text">Por fim existem muitos outros destinos misteriosos, como a Ladeira do Amendoim, uma ladeira que se deixado o carro em ponto morto sem freio, ele sobe a ladeira ao inves de descer, a sede da religiao Wicca no Brasil, a igreja da pracinha que é um ponto histórico da cidade entre outros.</p>
            </div>
        </div>
    {fotoAmpliada && (
        <Modal src={fotoAmpliada} alt={"Imagem ampliada do destino"} aoFechar={() => setFotoAmpliada(null)}/>
    )}
    </>
  );
}

export default SaoTome;