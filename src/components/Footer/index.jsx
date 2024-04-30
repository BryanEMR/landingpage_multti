import React, { useState } from "react";
import { Container } from "./styles";
import bandeiras from "../../assets/Footer/Bandeiras.png";
import certificados from "../../assets/Footer/Certificados.png";
import logo from "../../assets/Footer/Logo.png";
import background from "../../assets/Footer/Background.png"

import Notification from "../Notification";

export default function Footer() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <footer className="container" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', backgroundSize: 'cover', zIndex: 10}}>

            <Container>
                <div className='container'>
                    <div className="row">
                        <div className='column'>
                            <div className="title">
                                Endereço
                            </div>
                            <div className="text padding">
                                R. dos Andradas, 1234 Centro Histórico Porto Alegre - RS 90020-008
                            </div>
                        </div>
                        <div className='column'>
                            <div className="title">
                                Legal
                            </div>
                            <div className="text" style={{ cursor: 'pointer' }} onClick={openModal}>
                                Termos de uso
                            </div>
                            <br />
                            <div className="text">
                                Política de privacidade
                            </div>
                        </div>
                        <div className='column'>
                            <div className="title">
                                Contato
                            </div>
                            <div className="text">
                                contato@mpays.com
                            </div>
                            <br />
                            <div className="text">
                                (51) 98314.3325
                            </div>
                        </div>
                        <div className='column'>
                            <div className="title">
                                Aceitamos
                            </div>
                            <img src={bandeiras} className="bandeiras"  alt="bandeiras" />
                            <div className="text">
                                *Demais cartões sob contratação.
                            </div>
                        </div>
                        <div className='column'>
                        </div>
                        <div className='column right'>
                            <img src={certificados} alt="Certificados" />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className='column'>
                            <div className="text">
                                Copyright @ 2022 mpays
                            </div>
                        </div>
                        <div className='column'>
                        </div>
                        <div className='column'>
                        </div>
                        <div className='column'>
                        </div>
                        <div className='column'>
                        </div>
                        <div className='column right'>
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        <div  className="text center">
                        mpays é um produto da Multti Tecnologia e Integrações, empresa brasileira registrada no CNPJ nº 33.511.889/0001-20. A atividade de subcredenciamento é dispensada de autorização do Banco Central do Brasil, conforme termos da Circular nº 3.885/2018. Demais dispositivos aplicáveis, como o disposto nas Circulares nº 3.682/2013, 3.886/2018, 3.952/2019 e Resolução nº 24/2020 são rigorosamente cumpridos.
                        </div>
                    </div>
                </div>
            </Container>
            <div>
                <Notification isOpen={modalOpen} onClose={closeModal} />
            </div>
        </footer>
    )
}
