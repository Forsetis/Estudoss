// Um hook customizado pra lidar com a lógica de filtragem com base na data

// src/hooks/useFiltroValidade.js
import { useMemo } from 'react';

export function useFiltroValidade(produtos, modoFiltro, diasMargem = 14) {
  
console.log('console esta sendo chamado:');
  return useMemo(() => {
    const hoje = new Date();
    return produtos.filter(produto => {
      const validade = new Date(produto.validData);

      if (modoFiltro === 'vencidos') {
        return validade < hoje;
      }

      if (modoFiltro === 'prestes') {
        const limite = new Date();
        limite.setDate(hoje.getDate() + diasMargem);
        console.log(hoje, limite);
        return validade >= hoje && validade <= limite;
      }

      if (modoFiltro === 'validos') {
        const limite = new Date();
        limite.setDate(hoje.getDate() + diasMargem);
        return validade > limite;
      }

      return true; // Sem filtro
    });
  }, [produtos, modoFiltro, diasMargem]);
}