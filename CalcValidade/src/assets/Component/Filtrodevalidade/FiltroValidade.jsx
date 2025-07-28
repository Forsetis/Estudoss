// Responsável por exibir os botões de filtro: Vencidos, Prestes a vencer, Válidos

// src/components/FiltroValidade.jsx
export default function FiltroValidade({ onChangeFiltro }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
      <button onClick={() => onChangeFiltro('todos')}>Todos</button>
      <button onClick={() => onChangeFiltro('validos')}>Válidos</button>
      <button onClick={() => onChangeFiltro('prestes')}>Prestes a vencer</button>
      <button onClick={() => onChangeFiltro('vencidos')}>Vencidos</button>
    </div>
  );
}