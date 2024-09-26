
import './App.css';
import Titulo from './Componentes/Titulo/titulo';
import Messagem from './Componentes/Messagem/messagen';
import ListaDeTarefas from './Componentes/ListaDeTarefas/ListaDeTarefas';
import Produto from './Produto/produto';
import Loja from './Loja/loja';
import Usuario from './Loja/Usuario/usuario';

function App() {
  return (
    <div className="App">
      <Titulo texto="titulo" /> 
      <Messagem conteudo="Sou só mais eu" /> 
      <ListaDeTarefas />
      <Produto/>
      <Loja/>
      <Usuario/>
    </div>
  );
}

export default App;
