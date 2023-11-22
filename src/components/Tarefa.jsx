// Tarefa.jsx

import React from 'react';

const Tarefa = ({ item, concluirTarefa, removerTarefa }) => {
  return (
    <div className={`tarefa ${item.isFinalizado ? 'concluida' : ''}`}>
      <img src={item.imagem} alt={item.descricao} style={{ width: '150px', height: '150px', borderRadius: '10px' }} />
      <span>{item.descricao}</span>
      <div>
       
        <button className='botaoRemover' onClick={() => removerTarefa(item.id)}>Animal encontrado</button>
      </div>
    </div>
  );
};

export default Tarefa;
