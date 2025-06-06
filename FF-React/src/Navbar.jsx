import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="contador">Contador</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  );
}

export default Navbar