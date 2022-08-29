import React from "react";
import { useState } from "react";
import './Semaforo.css';


function Semaforo () {

    const [estado, setEstadoVar] = useState("Siga");

    const mudarEstado = () => {
        if(estado === "Pare") {
            setEstadoVar("Siga")
        } else if (estado === "Siga") {
            setEstadoVar("Atencao")
        } else {setEstadoVar("Pare")}
    }

    return (
        <>
        <div className="container">
            <input type="button" className="botao" onClick={mudarEstado} value="Mudar Semaforo"/>
            <div className={estado}>
                <p>{estado}</p>
            </div>
        </div>
        </>
    )
}

export default Semaforo
