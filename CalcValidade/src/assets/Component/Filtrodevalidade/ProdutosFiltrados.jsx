import { useFiltroValidade } from './useFiltroValidade';

export default function ProdutosFiltrados({ produtos, modoFiltro }) {
  const filtrados = useFiltroValidade(produtos, modoFiltro);

  return (
    <ul>
      {filtrados.map(p => (
        <li key={p.id}>
          <strong>{p.nome}</strong> — Vence em: {p.validData}
        </li>
      ))}
    </ul>
  );
}