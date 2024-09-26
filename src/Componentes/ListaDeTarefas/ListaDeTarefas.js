const items = ['item 1', 'item 2', 'item 3'];

function ListaDeTarefas() {
    return (
        <div className="Lista">
            <nav>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default ListaDeTarefas;
