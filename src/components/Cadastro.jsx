// Cadastrar.jsx

import React, { useState } from 'react';

const Cadastrar = ({ addTarefa }) => {
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [local, setlocal] = useState('');
  const [Raca, setRaca] = useState('');

  const handleAddTarefa = () => {
    if (descricao.trim() !== '' && imagem.trim() !== '') {
      addTarefa(descricao, imagem, local, Raca);
      setDescricao('');
      setImagem('');
      setlocal('');
      setRaca('');
    }
  };

  return (
    <div>
        
      <label htmlFor="descricao">Digite o nome do Seu animal e sua descrição</label>
      <input
        type="text"
        id="descricao"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <label htmlFor="descricao">Digite o local onde ele foi encontrado</label>
      <input
        type="text"
        id="local"
        value={local}
        onChange={(e) => setlocal(e.target.value)}
      />

<label htmlFor="descricao">Digite a raça do animal</label>
      <input
        type="text"
        id="Raca"
        value={Raca}
        onChange={(e) => setRaca(e.target.value)}
      />
      <label className='imagens' htmlFor="imagem">Coloque a foto do seu animalzinho</label>
      <input
        type="text"
        id="imagem"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
      />
      <button id='botaocadastrar' onClick={handleAddTarefa}>Adicionar Tarefa</button>
    </div>
  );
};

export default Cadastrar;

