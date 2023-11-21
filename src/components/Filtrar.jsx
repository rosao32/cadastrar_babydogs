function Filtrar({Filtrar, setFiltrar, search, setSearch, setSort}){
    return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <br /><br />
        <h2>Pesquise todos os animais que foram cadastrados</h2>
        <div className="filtrar">
            <input type="text" placeholder="digite para pesquisar" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select value={Filtrar} onChange={(e) => setFiltrar(e.target.value)}>
                <option value="Todos">Todos</option>
                <option value="Concluidas">Concluídas</option>
                <option value="Pendentes">Pendentes</option>
            </select>  

<button id="button_ordem">
            <span className="material-symbols-outlined" onClick={() => setSort('Crescente')} >
            expand_more
            </span>

</button>

<button id="button_ordem">
            <span className="material-symbols-outlined" onClick={() => setSort('Decrescente')}>
            expand_less
            </span>

</button>
            
        </div>

        </>
    )
}

export default Filtrar;