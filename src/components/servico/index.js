import React from 'react'

import './styles.css';
export default function Card(props) {
    return (
        <div className="card-container">
            <img src={props.img} alt="Curriculo Criativo" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="div-valor">
                <div style={{display: 'flex', background: 'none'}}>
                <p>Valor:</p>
                <b>R$ {props.valor}</b>
                </div>
                
            </div>

            <button>Agende já</button>
        </div>
    )
}
