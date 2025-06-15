function HelloWorld(props) {
    // const numeroDaTurma = props.turma
    // const numeroDePessoas = props.pessoas
    const { numeroDaTurma, numeroDePessoas } = props
    return <div>
        <p>Hello world da turma {numeroDaTurma}.</p>
        <p>Estamos em {numeroDePessoas} de pessoas nesse mundo!</p>
    </div>
}

export default HelloWorld;