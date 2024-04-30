import React, { useState, useEffect } from 'react';
import { CarouselContainer,Transition } from "./styles";
import image1 from "../../assets/Carousel/Image1.png";
import image2 from "../../assets/Carousel/Image2.png";
import image3 from "../../assets/Carousel/Image3.png";
import image4 from "../../assets/Carousel/Image4.png";
import next from "../../assets/Carousel/Next.png";
import back from "../../assets/Carousel/Back.png";

const dataCarousel = [
    {
        title: `Pagamentos com \nmáxima aprovação`,
        text: `Venda online com a maior taxa de aprovação possível. Reduza o número de vendas recusadas, autorize o maior número de pagamentos, receba e gerencie seu dinheiro de forma flexível.`,
        linkText: `Cadastre-se`,
        link: `#Cadastro`,
        image: image1,
    },
    {
        title: `Checkout de alta conversão`,
        text: `Uma solução de checkout com inúmeros recursos para potencializar ainda mais as suas vendas online. Customize toda a experiência de pagamento, ofereça produtos adicionais, recupere clientes, gere links para que outras pessoas possam promover seus produtos e mais.`,
        linkText: `Saiba mais`,
        link: `#SaibaMais`,
        image: image2,
    },
    {
        title: `Controle total do \nseu fluxo financeiro`,
        text: `Filtre as informações que você quer ver e acompanhe seu extrato diariamente para saber quando você vai receber pelas suas vendas. Precisa do dinheiro antes? Antecipe os seus recebíveis com apenas alguns cliques!`,
        linkText: `Clique e conheça`,
        link: `#CliqueConheca`,
        image: image3,
    },
    {
        title: `Receba as vendas parceladas \nem até 2 dias úteis`,
        text: `Solicite a antecipação de recebíveis online e receba pagamentos com agilidade, sem burocracia e sem juros abusivos. Vamos ajudar o seu negócio a adquirir capital de giro recebendo um dinheiro que já é seu!`,
        linkText: `Aproveite`,
        link: `#Aproveite`,
        image: image4,
    },
];

export default function Carousel() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const slide = document.querySelector('.slide');
        slide.addEventListener('transitionend', () => {
            slide.classList.remove('fade-out');
        });
    }, [count]);

    const handleBackClick = () => {
        if (count > 0) {
            document.querySelector('.slide').classList.add('fade-out'); 
            setTimeout(() => {
                setCount(count - 1);
            }, 300); 
        }
    };
    
    const handleNextClick = () => {
        if (count < dataCarousel.length - 1) {
            document.querySelector('.slide').classList.add('fade-out'); 
            setTimeout(() => {
                setCount(count + 1);
            }, 300); 
        }
    };
    

    return (
        <CarouselContainer>
            <div className='container'>
                {count > 0 ? <Transition src={back} alt="Anterior" style={{ cursor: 'pointer' }} onClick={handleBackClick} /> : <div className="space"/>}
                <div className="slide">
                    <div className='column1'>
                        <div className='center'>
                            <div className='title'>
                                {dataCarousel[count].title}
                            </div>
                            <br />
                            <div className='text'>
                                {dataCarousel[count].text}
                            </div>
                            <br />
                            <div className='linkText'>
                                <a
                                    href={dataCarousel[count].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {dataCarousel[count].linkText}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='column2'>
                        <img src={dataCarousel[count].image} alt="Imagem do carrossel" />
                    </div>
                </div>
                {count < dataCarousel.length - 1 && <Transition src={next} alt="Próximo" style={{ cursor: 'pointer' }} onClick={handleNextClick} />}
            </div>
        </CarouselContainer>
    )
}
