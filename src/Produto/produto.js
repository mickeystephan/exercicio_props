


function Produto ({nome,preco,categoria}){
    return(
        <div className="Produto">
             <h2>{nome}</h2>
             <p>Preco : ${preco}</p>
             <p>Categoria:{categoria}</p>

        </div>
    );
}

export default Produto;