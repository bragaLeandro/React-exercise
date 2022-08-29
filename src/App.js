import './App.css';
import Semaforo from './components/semaforo/Semaforo';
import Conteudo from './components/conteudo/Conteudo';
import Carros from './Carros';

function App() {

    const cars = ['Celta', 'Gol', 'Uno', 'Fusca', 'Palio', 'Fiesta', 'Corsa', 'Cruze', 'Onix', 'Bortola'];

    return(
    <>
    <h1>Leandro Alves de Souza Braga RM94513 1TDST</h1>
    <Semaforo/>
    <Conteudo/>
    <Carros>
        {cars.map((car, i) => <li>{i+1} {car}</li>)}
    </Carros>
    </> 
    )
}

export default App;
