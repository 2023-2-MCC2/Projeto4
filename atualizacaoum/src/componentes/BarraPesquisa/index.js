import { palavras } from './barra'
import './style.css'
import lupa from '../../imagens/lupa.svg'
import { useState } from 'react'



function Search(){
    const [PalavrasPesquisadas, setPalavrasPesquisadas] = useState([])

    return(
            <div id="divBusca">
            <input 
                type="text" 
                placeholder="Buscar..." 
                id="textoBusca"
                onBlur = {evento =>{
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = palavras.filter(palavra => palavra.nome.toLowerCase().includes(textoDigitado.toLowerCase()))
                    setPalavrasPesquisadas(resultadoPesquisa)
                }  
            }
            />
            <button id="busca"><img src={lupa}  alt="Buscar"/></button>
            {PalavrasPesquisadas.map( palavra =>(
                <div id="Resultado">
                    <p>{palavra.nome}</p>
                </div>
            ))}
        </div>
    )
}

export default Search
