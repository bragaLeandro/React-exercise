import React from "react";
import { useState } from "react";
import './NovaCarteirinha.css'

function NovaCarteirinha() {

    const [aluno, setAluno] = useState({ 'nome': '', 'rm': '', 'turma': '' })

    const mostrarNome = (e) => {
        const { name, value } = e.target;
        if (name === 'nome') {
            setAluno({ 'nome': value, 'rm': aluno.rm })
        } else if (name === 'rm') {
            setAluno({ 'nome': aluno.nome, 'rm': value })
        } else if (name === 'turma') {
            setAluno({ 'nome': aluno.nome, 'rm': aluno.rm, 'turma': value })
        }
    }

    return (
        <>
            <div className="forms">
                <h2>Dados Carteirinha 1</h2>
                Nome: <input name="nome" onChange={mostrarNome} /> <br />
                RM: <input name="rm" onChange={mostrarNome} /> <br />
                TURMA: <input name="turma" onChange={mostrarNome} /> <br />
            </div>

            <div className="box">
                <div className="thumbnail">
                    <h2>Carteirinha</h2>
                    <img src="img/Selfie_FIAP.jpeg" alt="" className="foto" />
                    <p>{aluno.nome}</p>
                    <p>{aluno.rm}</p>
                    <p>{aluno.turma}</p>
                </div>
            </div>
        </>

    )
}

export default NovaCarteirinha