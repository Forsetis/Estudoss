import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Certifique-se de que está importando corretamente
import About from "./pages/About";
import Contador from "./Contador";
import Error from "./pages/Error";
import Main from "./pages/main/main";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar sempre visível */}
      <Routes>
        <Route path="/" element={<Main />} /> {/* Página inicial sem nada */}
        <Route path="/contador" element={<Contador />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
