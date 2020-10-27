import React, { useState } from 'react'

import './styles.css';


export default function HeaderTop() {

    const [headerFade, setHeaderFade] = useState(false);

    const headerFader = () => {
        if (window.scrollY >= 80) {
            setHeaderFade(true)
        }
        else {
            setHeaderFade(false)
        }
    }


    window.addEventListener('scroll', headerFader)

    return (

        <div className={headerFade ? "header-top" : "header-top-fade"}>
            <div className="header-menu">
                <div className="logo">
                    <a href="/">Natal</a>
                    <a href="/" style={{ color: "orange" }}>Empregos</a>
                </div>

                <div className="nav-links">
                    <a href="/">SERVIÇOS</a>
                    <a href="/">SOBRE NÓS</a>
                    <a href="/">CONTATO</a>
                </div>
            </div>

        </div>
    )
}
