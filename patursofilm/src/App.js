import React from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Select from "./Components/Select";
import TvShowsList from "./Components/TvShowsList";
import InputForm from "./Components/InputForm";
import Button from "./Components/Button";

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      email:'',
      password:'',
      showEmail: false,
      isRequiredInput: true,
      job: '',
    }
    // this.handleChangeEmail = this.handleChangeEmail.bind(this)
    // this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChangeEmail(e) {
  //   this.setState({
  //     email: e.target.value
  //   })
  // }

  // handleChangePassword(e) {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }

  onSubmitForm = (e) => {
    e.preventDefault();
    alert('Cadastrado com sucesso');
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      showEmail: false,
    })
  }

  render(){
    const { email, password, profession, showEmail } = this.state;
    console.log('email:', email);
    console.log('password:', password);
    return(
      <main>
        <h1>Paturso Filmes</h1>
        <h2>Para logar em nosso site para receber a newsletter de filmes, preencha abaixo com o login e senha</h2>
        <Header title="Cadastro de Usuário"/>
        <form onSubmit={this.onSubmitForm}>
          <InputForm 
            inputLabel="Email*"
            inputType="email"
            inputName="email"
            inputValue={email}
            isRequired={true}
            onChangeInput={this.handleChange}
            />
            <InputForm 
              inputLabel="Senha*"
              inputType="password"
              inputName="password"
              inputValue={password}
              isRequired={true}
              onChangeInput={this.handleChange}
            />
            <Select 
            name='job' 
            label='Profissao'
            value={this.state.job} 
            handleChange={this.handleChange}
            options={['Dev', 'Estudante', 'Outro']}/>
            <InputForm 
              inputLabel="Comentário"
              inputType="text"
              inputName="coment"
              inputValue={profession}
              onChangeInput={this.handleChange}
            />
          <Button 
          typeButton="submit"
          labelButton="Logar" 
          />
        </form>
        {showEmail ? email : ''}
        <h2>Filtre o programa que voce quer assistir:</h2>
        <Input/>
        <TvShowsList/>
      </main>
    );
  }
}

export default App;