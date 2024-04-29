import React, { useState } from "react";
import { Container } from "./styles";
import Notification from "../Notification";

export default function Section4() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Container>
                <div className='container'>
                    <div className="row">
                        <div className='column1'>
                            <div className="title">
                                Crie sua conta
                            </div>
                            <div className="text">
                                Preencha o formulário ao lado para cadastrar-se no mpays.

                            </div>
                        </div>
                        <div className='column2'>
                            <form action="#Submit" method="post">
                                <label>
                                    Nome e sobrenome *
                                </label>
                                <br/>
                                <input type="text" placeholder="Nome"/>
                                <br/>
                                <label>
                                    E-mail *
                                </label>
                                <br/>
                                <input type="email" placeholder="E-mail"/>
                                <br/>
                                <label>
                                    Telefone *
                                </label>
                                <br/>
                                <input type="tel" placeholder="Telefone"/>
                                <br/>
                                <label>
                                    Senha *
                                </label>
                                <br/>
                                <input type="password" placeholder="••••••••"/>
                                <br/>
                                <br/>
                                <button type="button" onClick={openModal}>
                                Cadastrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
            {/* <Icone src={about} alt="Sobre"  onClick={openModal}/> */}

            <div>
                <Notification isOpen={modalOpen} onClose={closeModal} />
            </div>
        </>


    )
}