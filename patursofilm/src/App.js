import React from "react";
import TvShowsList from "./Components/TvShowsList";
import Input from "./Components/Input";
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
    }
    // this.handleChangeEmail = this.handleChangeEmail.bind(this)
    // this.handleChangePassword = this.handleChangePassword.bind(this);
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
    this.setState({
      showEmail: true
    })
    console.log('Clicou')
  }
  handleChange = (e) => {
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value,
      showEmail: false,
    })
  }

  render(){
    const { email, password, showEmail, isRequiredInput } = this.state;
    console.log('email:', email);
    console.log('password:', password);
    return(
      <main>
        <h1>Paturso Filmes</h1>
        <h2>Para logar em nosso site para receber a newsletter de filmes, preencha abaixo com o login e senha</h2>
        <form onSubmit={this.onSubmitForm}>
          <InputForm 
            inputLabel="Email"
            inputType="email"
            inputName="email"
            inputValue={email}
            onChangeInput={this.handleChange}
            />
            <InputForm 
            inputLabel="Senha"
            inputType="password"
            inputName="password"
            inputValue={password}
            isRequired={isRequiredInput}
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