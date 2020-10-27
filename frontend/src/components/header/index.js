import React from 'react'

import { FiSearch } from 'react-icons/fi';
import './styles.css';


export default function Header(props) {

    const busca = props.busca;

    return (
        <div className="container">
            <div
                className='header'
                style={{
                    height: `${props.size}`,
                    backgroundImage: `url(${props.img})`
                }}
            >
                <div className="busca-section">
                    <h2>{props.title}</h2>
                    <h4>{props.subTitle}</h4>
                    {busca ? <div className="div-busca">
                        <input id="busca" placeholder="Ex: Cozinheiro, Soldador, Motorista..."></input>
                        <button for="busca"><FiSearch className="icon-search" />BUSCAR</button>
                    </div> : null}
                </div>

            </div>
        </div>
    )
}
