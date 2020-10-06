import React from 'react'

import './styles.css';
import Header from '../../components/header';
import HeaderTop from '../../components/headerTop';
import Footer from '../../components/footer';
import heroImg from '../../assets/images/heroi.jpg'

export default function SobreNos() {
    return (
        <div className='wrapper'>


            <div className='container'>


                <HeaderTop />
                <Header
                    title={"NATAL EMPREGOS"}
                    subTitle={"Os melhores serviços para seu curriculo!"}
                    busca={false}
                    size={'35vh'}
                    img={heroImg}
                />

                <div className="mid-section">
                </div>

                <Footer />

            </div>
        </div>
    )
}
