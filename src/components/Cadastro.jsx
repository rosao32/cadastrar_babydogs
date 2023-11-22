import React, { useState } from 'react';

const Cadastrar = ({ addTarefa }) => {
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [local, setLocal] = useState('');
  const [raca, setRaca] = useState('');

  const handleAddTarefa = () => {
    if (descricao.trim() !== '' && imagem.trim() !== '' && local.trim() !== '' && raca.trim() !== '') {
      addTarefa(descricao, imagem, local, raca);
      setDescricao('');
      setImagem('');
      setLocal('');
      setRaca('');
    }
  };

  return (
    <div>
      <label htmlFor="descricao">Digite o nome do seu animal e sua descrição</label>
      <input
        type="text"
        id="descricao"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <br /><br /><br />
      <label htmlFor="local">Digite o local onde ele foi encontrado</label>
      <input
        type="text"
        id="local"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
      />
      <br /><br />
      <label htmlFor="raca">Digite a raça do animal</label>
      <input
        type="text"
        id="raca"
        value={raca}
        onChange={(e) => setRaca(e.target.value)}
      />
      <br /><br />
      <label htmlFor="imagem">Coloque a foto do seu animalzinho</label>
      <input
        type="text"
        id="imagem"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
      />
      <button id='botaocadastrar' onClick={handleAddTarefa}>Cadastrar animal</button>
    </div>
  );
};

export default Cadastrar;


