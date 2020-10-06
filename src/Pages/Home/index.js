import React from 'react';



import './styles.css'
import Header from '../../components/header';
import HeaderTop from '../../components/headerTop';
import Footer from '../../components/footer';
import heroImg from '../../assets/images/heroi.jpg'
export default function Home() {

    return (
        <div className='wrapper'>


            <div className='container'>
                <HeaderTop />
                <Header
                    title={"BUSQUE AS MELHORES VAGAS"}
                    subTitle={"As melhores vagas de emprego da região você encontra aqui!"}
                    busca={true}
                    size={'55vh'}
                    img={heroImg}
                />
                <div className="mid-section">
                    <h1>ESPAÇO DAS VAGAS</h1>
                </div>

                <hr style={{ 'border': '1px solid black' }} />

                <div className="bottom-section">
                    <h2>Receba as vagas em primeira mão</h2>
                    <h3>Preencha seu e-mail e iremos enviar novas vagas assim que surgirem</h3>
                    <input type="email" placeholder="Digite seu E-mail..."></input>
                    <button>Receber Vagas</button>
                    <h4>Náo iremos compartilhar seu e-mail com ninguém.</h4>
                </div>
                <Footer />
            </div>


        </div>
    )

}