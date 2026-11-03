import Navbar from "../navbar"
function About ({setTelaAtiva}) {
    return (
        <>
        <Navbar aoClicarInicio={() => setTelaAtiva('introducao')}
                aoClicarSobre={() => setTelaAtiva ('sobre')}
                aoClicarPacotes={() => setTelaAtiva('pacotes')} 
                aoClicarContato={() => setTelaAtiva('contato')}
            />
        <div className="enunciado">
            <h1>Quem somos nós?</h1>
            <p>Somos uma agência de viagens focada no seu conforto, descanso e lazer, cujo trabalho fica todo conosco 
                para lhe proporcionar a melhor experiencia e sem preocupações.</p>
            <h1>Quais serviços oferecemos?</h1>
            <p>Oferecemos toda a estrutura para melhor experiencia da viagem, desde o acompanhamento de preço das 
                passagens aéreas (quando pra voo internacional), quanto a contratação de um guia local 
                (podendo ser um agente credenciado da nossa empresa ou não, que te acompanhará por todos os locais 
                contratados durante a sua estadia), até o serviço de reserva e hospedagem.</p>
        </div>
        <div className="divisor_line"></div>
        </>
    );
}
export default About