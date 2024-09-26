import React from 'react';
import Produto from '../Produto/produto';

function Loja() {
  const produtos = [
    { id: 1, nome: 'Camisa', preco: '1000', categoria: 'Desportiva' },
    { id: 2, nome: 'Notebook', preco: '10000', categoria: 'Desmontável' },
    { id: 3, nome: 'Maçã', preco: '1000', categoria: 'Royal' }, 
  ];

  return (
    <div className="loja">
      {produtos.map((produto) => (
        <Produto
          key={produto.id} 
          nome={produto.nome}
          preco={produto.preco}
          categoria={produto.categoria}
        />
      ))}
    </div>
  );
}

export default Loja;
