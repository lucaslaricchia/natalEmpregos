import React from 'react'


import './styles.css'
import Header from '../../components/header';
import HeaderTop from '../../components/headerTop';
import Card from '../../components/servico'
import Footer from '../../components/footer';
import heroImg from '../../assets/images/heroi2.jpg'
import img1 from '../../assets/images/curriculo1.jpg'
import img2 from '../../assets/images/curriculo2.jpg'
import img3 from '../../assets/images/curriculo3.jpg'

export default function Servicos() {
    return (
        <div className='wrapper'>


            <div className='container'>


                <HeaderTop />
                <Header
                    title={"SERVIÇOS"}
                    subTitle={"Os melhores serviços para seu curriculo!"}
                    busca={false}
                    size={'35vh'}
                    img={heroImg}
                />

                <div className="mid-section">
                    <h2>Conheça nossos serviços</h2>
                    <p>Podemos te auxiliar na busca de um emprego!</p>
                    <div className="cards-div">
                        <Card img={img1}
                            title="Currículo Criativo"
                            description="Texto sobre o curriculo criativo, mais texto e mais texto, para caber"
                            valor="50,00" />

                        <Card img={img2}
                            title="Currículo Criativo"
                            description="Texto sobre o curriculo criativo, mais texto e mais texto, para caber"
                            valor="60,00" />

                        <Card img={img3}
                            title="Currículo Criativo"
                            description="Texto sobre o curriculo criativo, mais texto e mais texto, para caber"
                            valor="150,00" />
                    </div>
                </div>

                <Footer />

            </div>

        </div>
    )
}
