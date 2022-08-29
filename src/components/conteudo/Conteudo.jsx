import React from "react";
import Carteirinha from "../carteirinha/Carteirinha"
import NovaCarteirinha from "../novaCarteirinha/NovaCarteirinha";
import './Conteudo.css'

function Conteudo() {
    return (
        <div className="container1">
                <NovaCarteirinha/>
                <Carteirinha />
                <Carteirinha />
                <Carteirinha />
        </div>
    )
}

export default Conteudo