import React from "react";
import TvShowsList from "./Components/TvShowsList";
import Input from "./Components/Input";

class App extends React.Component{
  render(){
    return(
      <main>
        <h1>Paturso Filmes</h1>
        <Input/>
        <TvShowsList/>
      </main>
    );
  }
}

export default App;