import React, { useState } from "react";
import InputField from "./assets/components/InputField";
import CircleSelector from "./assets/components/CircleSelector";
import Result from "./assets/components/Result";
import Button from "./assets/components/Button";
import './App.css';

function App() {
  const [idade, setIdade] = useState("");
  const [alturaJoelho, setAlturaJoelho] = useState("");
  const [circBraco, setCircBraco] = useState("");
  const [sexo, setSexo] = useState("homem");
  const [etnia, setEtnia] = useState("branco");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    let altura = 0;
    let peso = 0;
    let idade = 0;

    // Fórmula de altura pelo joelho
    if (sexo === "homem") {
      altura = 60.65 + (2.04 * alturaJoelho);
    } else {
      altura = 84.88 + (1.83 * alturaJoelho) + (0,24* idade);
    }

    // Fórmula de peso pelo braço + joelho
    if (sexo === "homem" && etnia === "branco") {
      peso = (circBraco * 3.21) + (alturaJoelho * 1.19) - 86.82;
    } else if (sexo === "homem" && etnia === "preto") {
      peso = (circBraco * 3.21) + (alturaJoelho * 1.9) - 83.72;
    } else if (sexo === "mulher" && etnia === "branco") {
      peso = (circBraco * 2.81) + (alturaJoelho * 1.1) - 66.04;
    } else {
      peso = (circBraco * 1.24) + (alturaJoelho * 2.81) - 82.48;
    }

    setResultado({ altura: altura.toFixed(2), peso: peso.toFixed(2) });
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Calculadora Antropométrica</h1>

      <CircleSelector
        label="Sexo"
        options={["Homem", "Mulher"]}
        selected={sexo}
        onChange={setSexo}
      />

      <CircleSelector
        label="Etnia"
        options={["Branco", "Preto"]}
        selected={etnia}
        onChange={setEtnia}
      />

      <InputField
        label="Idade (Anos)"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <InputField
        label="Altura do Joelho (cm)"
        value={alturaJoelho}
        onChange={(e) => setAlturaJoelho(e.target.value)}
      />

      <InputField
        label="Circunferência do Braço (cm)"
        value={circBraco}
        onChange={(e) => setCircBraco(e.target.value)}
      />

      <Button className="Button" onClick={calcular} text="Calcular" />

      {resultado && <Result dados={resultado} />}
    </div>
  );
}

export default App;
