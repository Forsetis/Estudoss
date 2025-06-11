
import './App.css';
import HelloWorld from './Components/HelloWorld';
import LogoReact from './Components/LogoReact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoReact/>
        <HelloWorld numeroDaTurma="12" numeroDePessoas="8 bilhões"/>
      </header>
    </div>
  );
}

export default App;
