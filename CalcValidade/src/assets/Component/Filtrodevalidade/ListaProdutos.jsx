// Recebe os dados filtrados e renderiza os cards ou itens.

// src/components/ListaProdutos.jsx
export default function ListaProdutos({ produtos }) {
  if (produtos.length === 0) return <p>Nenhum produto encontrado.</p>;

  return (
    <ul>
      {produtos.map(p => (
        <li key={p.id}>
          <strong>{p.nome}</strong> – Vence em: {p.validade}
        </li>
      ))}
    </ul>
  );
}