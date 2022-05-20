import{ React,  useState, useEffect } from "react";
import "./index.css" 

const dati = [
    {id:1 ,nome:"pippo", cognome:"NONLOSO", numero:"2398"}
]

export default function Aggiungi ({setListaContatti}) {
const [nome, setNome] = useState(" ");
const [cognome, setCognome] = useState(" ");
const [numero, setNumero] = useState(" ");
const [rubrica, setRubrica]=useState([])

function handonSubmit (e) {
    e.preventDefault();
    setRubrica(valoreprecedente => valoreprecedente.concat([{nome:nome}]));
    setRubrica(valoreprecedente => valoreprecedente.concat([{cognome:cognome}]));
    setRubrica(valoreprecedente => valoreprecedente.concat([{numero:numero}]));

}

return (
    <div className="add">
       <form onSubmit={handonSubmit}>  
           <label htmlFor="Nome">Nome</label>
        <input  type="text"  onChange={(e) => setNome(e.target.value)} value={nome} ></input>
            <label htmlFor="Cognome">Cognome</label>
        <input onChange={(e) => setCognome(e.target.value)}  value={cognome} type="text" ></input>
            <label htmlFor="Numero">Numero</label>
        <input onChange={(e) => setNumero(e.target.value)} value={numero} type="text"  ></input>
        <button value="Aggiungi" onClick={() => setListaContatti(rubrica)}>Aggiungi</button>
        </form>

    </div>
)
}