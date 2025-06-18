import React from "react";
import TvShowsList from "./Components/TvShowsList";

class App extends React.Component{
  render(){
    return(
      <main>
        <h1>Paturso Filmes</h1>
        <TvShowsList/>
      </main>
    );
  }
}

export default App;