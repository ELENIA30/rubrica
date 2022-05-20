import Rubrica from './Rubrica';
import Aggiungi from './Aggiungi';
import Ricerca from './Ricerca';
import {useState} from 'react'
import './App.css';

function App() {
  const [listaContatti, setListaContatti] = useState([])
  return (
    <>
    <Aggiungi setListaContatti={setListaContatti}/>
    {console.log('-------',listaContatti)}
    <Rubrica listaContatti={listaContatti}/>
    <Ricerca/>
    </>
  );
}

export default App;
