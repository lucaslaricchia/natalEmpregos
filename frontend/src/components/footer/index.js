import React from 'react'

import './styles.css';

import logoImg from '../../assets/images/logoNatalEmpregos.png';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="links-uteis">
                    <p style={{ color: "orange", fontSize: '1.3rem' }}>Links úteis</p>
                    <p>Sobre a Natal Empregos</p>
                    <p>Fale Conosco</p>
                    <p>natal.empregos</p>
                    <p>Natal Empregos</p>
                </div>
                <div className='footerlogo'>
                    <img src={logoImg} alt="LogoNatalEmpregos"/>
                </div>

                <div className="parceiros">
                    <p style={{ color: "orange", fontSize: '1.3rem' }}>Parceiros</p>
                    <p>Garantistas Codign LTDA 2020</p>
                </div>
            </div>
        </div>
    )
}
