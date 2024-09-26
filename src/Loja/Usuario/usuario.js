
import React from 'react';

function Usuario(props) {
  const usuarios = [
    { id: 1, nome: 'Sasuke', idade: 16, origem: 'Japão' }, 
   
  ];

  return (
    <div className="usuario">
      {usuarios.map((usuario) => (
        <div key={usuario.id} className="usuario-card">
          <h2>{usuario.nome}</h2>
          <p>Idade: {usuario.idade}</p>
          <p>Origem: {usuario.origem}</p>
        </div>
      ))}
    </div>
  );
}

export default Usuario;
