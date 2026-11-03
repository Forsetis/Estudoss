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
  const [sexo, setSexo] = useState("Homem");
  const [etnia, setEtnia] = useState("Branco");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const numIdade = parseFloat(idade) || 0;
    const numAlturaJoelho = parseFloat(alturaJoelho) || 0;
    const numCircbraco = parseFloat(circBraco) || 0;

    let altura = 0;
    let peso = 0

    // Fórmula de altura pelo joelho
    if (sexo === "Homem") {
      altura = 60.65 + (2.04 * numAlturaJoelho);
    } else {
      altura = 84.88 + (1.83 * numAlturaJoelho) - (0.24* numIdade);
    }

    // Fórmula de peso pelo braço + joelho
    if (sexo === "Homem" && etnia === "Branco") {
      peso = (numCircbraco * 3.21) + (numAlturaJoelho * 1.19) - 86.82;
    } else if (sexo === "Homem" && etnia === "Preto") {
      peso = (numCircbraco * 3.14) + (numAlturaJoelho * 1.09) - 83.72;
    } else if (sexo === "Mulher" && etnia === "Branco") {
      peso = (numCircbraco * 2.81) + (numAlturaJoelho * 1.01) - 66.04;
    } else if (sexo === "Mulher" && etnia === "Preta") {
      peso = (numCircbraco * 2.81) + (numAlturaJoelho * 1.24) - 82.48;
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
