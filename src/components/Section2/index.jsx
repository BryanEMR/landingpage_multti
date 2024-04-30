import React, { useState } from "react";
import { Container, Icone } from "./styles";
import about from "../../assets/Section2/About.png"
import Modal from "../ModalTable"; 

const rows = [
    {
        days: `NA HORA`,
        value: `Não disponível`
    },
    {
        days: `EM 10 DIAS`,
        value: `R$ 949,70`
    },
    {
        days: `EM 30 DIAS`,
        value: `R$ 959,70`
    },
];

export default function Section2() {
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
                    <div className="slide">
                        <div className='column1'>
                            <div className='center'>
                                <div className='title'>
                                    Simulador de vendas mpays
                                </div>
                                <br />
                                <div className='text'>
                                    Veja quanto você recebe nas vendas no crédito, débito e parcelado.
                                </div>
                            </div>
                        </div>
                        <div className='column2'>
                            <div className="insert">
                                <form name="calcularValor" action="#" method="post">
                                    <label htmlFor="calcularValor">
                                        Valor
                                    </label>
                                    <br />
                                    <input type="text" name="value" disabled placeholder={'R$ 1.000,00'} />
                                    <br />
                                    <br />
                                    <label htmlFor="calcularValor">
                                        Forma de pagamento
                                    </label>
                                    <br />
                                    <select name="payment" id="payment" disabled value={0}>
                                        <option value="pix">PIX</option>
                                        <option value="0">Crédito à vista</option>
                                    </select>
                                    <br />
                                </form>
                            </div>
                            <div className="values">
                                <table>
                                    <tr>
                                        <th colspan="2">
                                            VOCÊ RECEBE:
                                        </th>
                                    </tr>
                                    {
                                        rows.map((row) => (
                                            <tr>
                                                <td>
                                                    {row.days}
                                                </td>
                                                <td>
                                                    {row.value}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </table>
                                <p>
                                    Todas as simulações usam as taxas iniciais informadas no site.
                                    <Icone src={about} alt="Sobre" style={{ cursor: 'pointer' }}  onClick={openModal}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div>
                <Modal isOpen={modalOpen} onClose={closeModal} /> 
            </div>
        </>


    )
}