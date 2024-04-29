import React from "react";
import { Container } from "./styles";
import testimony1 from "../../assets/Section3/Testimony1.png"
import testimony2 from "../../assets/Section3/Testimony2.png"
import testimony3 from "../../assets/Section3/Testimony3.png"
import doubleQuotes from "../../assets/Section3/DoubleQuotes.png"
export default function Section3() {
    return (
        <Container>
            <div className="container">
                <div className=" row title center">
                    Depoimentos
                </div>
                <div className=" row text center">
                    O suporte ao cliente é nossa primeira prioridade.
                </div>
                <div className="row ">
                    <div className="depositions">
                        <div>
                            <img className="imgTestimony" src={testimony1} alt="Testemunho 1" />
                        </div>
                        <div>
                            <img className="imgDoubleQuotes" src={doubleQuotes} alt="Aspas Duplas" />
                        </div>
                        <div className="testimony">
                            A mpays foi a plataforma onde eu tive a maior taxa de aprovação de crédito do mercado.
                        </div>
                        <div className="name">
                            Carlos Eduardo Amaral
                        </div>
                        <div className="company">
                            CEO da Amaral Mídia
                        </div>
                    </div>
                    <div className="depositions">
                        <div>
                            <img className="imgTestimony" src={testimony2} alt="Testemunho 2" />
                        </div>
                        <div>
                            <img className="imgDoubleQuotes" src={doubleQuotes} alt="Aspas Duplas" />
                        </div>
                        <div className="testimony">
                            O principal diferencial é a taxa de cartão recusado ser muito baixa, aumentando nossa taxa de conversão e o faturamento.
                        </div>
                        <div className="name">
                            Renato Laureano
                        </div>
                        <div className="company">
                            Fundador da Anellimn Store
                        </div>
                    </div>
                    <div className="depositions">
                        <div>
                            <img className="imgTestimony" src={testimony3} alt="Testemunho 3" />
                        </div>
                        <div>
                            <img className="imgDoubleQuotes" src={doubleQuotes} alt="Aspas Duplas" />
                        </div>
                        <div className="testimony">
                            Depois de muito pesquisar, decidi migrar para a mpays e já nas primeiras semanas nossa taxa de conversão subiu para 94%.
                        </div>
                        <div className="name">
                            Armando Girão
                        </div>
                        <div className="company">
                            Fundador da Orion E-commerce
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}