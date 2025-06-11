function HelloWorld(props) {
    // const numeroDaTurma = props.turma
    // const numeroDePessoas = props.pessoas
    const { numeroDaTurma, numeroDePessoas } = props
    return <p>Hello world da turma {numeroDaTurma}. Estamos em {numeroDePessoas} de pessoas nesse mundo!</p>
}

export default HelloWorld;