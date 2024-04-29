import React from 'react';
import './Modal.css';
import { Container } from './styles'

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={onClose}>&times;</span>
            <Container>
              {/* primeira parte da tabela */}
              <div className="linha">
                <div className="coluna-4">
                  <p className="title">
                    Tabela de Valores
                  </p>
                  <p className="text">
                    Tabela para volume de vendas até R$ 100.0000,00
                  </p>
                </div>
                <div className="coluna-2 gray">VISA/MASTER/DINERS</div>
                <div className="coluna-2 gray">ELO</div>
                <div className="coluna-2 gray">AMERICAN EXPRESS</div>
                <div className="coluna-2 gray">HIPERCAD</div>
              </div>
              <div className="linha">
                <div className="coluna-4">
                </div>
                <div className="coluna-2">
                  <div className="coluna-6"></div>
                  <div className="coluna-6">Caixa</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6"></div>
                  <div className="coluna-6">Caixa</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6"></div>
                  <div className="coluna-6">Caixa</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6"></div>
                  <div className="coluna-6">Caixa</div>
                </div>
              </div>
              <div className="linha">
                <div className="coluna-4">
                </div>
                <div className="coluna-2">
                  <div className="coluna-6">Padrão</div>
                  <div className="coluna-6">Rápido</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6">Padrão</div>
                  <div className="coluna-6">Rápido</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6">Padrão</div>
                  <div className="coluna-6">Rápido</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6">Padrão</div>
                  <div className="coluna-6">Rápido</div>
                </div>
              </div>
              <div className="linha margin-top-5">
                <div className="coluna-4 white">
                  <p className='padding-10'>
                    Débito
                  </p>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">3%</div>
                  <div className="coluna-6 light-blue">2%</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">-</div>
                  <div className="coluna-6 light-blue">-</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">-</div>
                  <div className="coluna-6 light-blue">-</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">-</div>
                  <div className="coluna-6 light-blue">-</div>
                </div>
              </div>
              <div className="linha margin-top-5">
                <div className="coluna-4 white">
                  <p className='padding-10'>
                    Crédito à vista
                  </p>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">3,70%</div>
                  <div className="coluna-6 light-blue">3,20%</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">4,47%</div>
                  <div className="coluna-6 light-blue">3,50%</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">4,16%</div>
                  <div className="coluna-6 light-blue">3,70%</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">4,10%</div>
                  <div className="coluna-6 light-blue">3,790%</div>
                </div>
              </div>
              <div className="linha margin-top-5">
                <div className="coluna-4 white">
                  <p className='padding-10'>
                    Crédito parcelado (até 6x)
                  </p>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">4,28%</div>
                  <div className="coluna-6 light-blue">3,50%</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">4,47%</div>
                  <div className="coluna-6 light-blue">3,50%</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">4,75%</div>
                  <div className="coluna-6 light-blue">3,90%%</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue"> 4,50% </div>
                  <div className="coluna-6 light-blue">3,90%</div>
                </div>
              </div>
              <div className="linha margin-top-5">
                <div className="coluna-4 white">
                  <p className='padding-10'>
                    Crédito parcelado (até 12x)
                  </p>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">4,79%</div>
                  <div className="coluna-6 light-blue">4%</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">5,01%</div>
                  <div className="coluna-6 light-blue">4,40%</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue">4,55%</div>
                  <div className="coluna-6 light-blue">4.40%%</div>
                </div>
                <div className="coluna-2">
                  <div className="coluna-6 dark-blue"> 4,90% </div>
                  <div className="coluna-6 light-blue">4,40%%</div>
                </div>
              </div>
              <br />
              {/* Segunda parte da tabela */}
              <div className="linha">
                <div className="coluna-6 flex">
                  <div className="coluna-8"></div>
                  <div className="coluna-2"></div>
                  <div className="coluna-2 center ">caixa</div>
                </div>
                <div className="coluna-6">
                </div>
              </div>
              <div className="linha">
                <div className="coluna-6 flex">
                  <div className="coluna-8">Tarifas de antecipação</div>
                  <div className="coluna-2 center">Padão</div>
                  <div className="coluna-2 center">Rápido</div>
                </div>
                <div className="coluna-6">
                </div>
              </div>
              <div className="linha margin-top-5">
                <div className="coluna-6 flex">
                  <div className="coluna-8 white">
                    <p className='padding-10'>
                      Taxa de antecipação - crédito à vista
                    </p>
                  </div>
                  <div className="coluna-2 dark-blue center">3%</div>
                  <div className="coluna-2 light-blue center">2%</div>
                </div>
                <div className="coluna-6">
                </div>
              </div>
              <div className="linha margin-top-5">
                <div className="coluna-6 flex">
                  <div className="coluna-8 white">
                    <p className='padding-10'>
                      Taxa de antecipação - crédito parcelado*
                    </p>
                  </div>
                  <div className="coluna-2 dark-blue center">3,50%</div>
                  <div className="coluna-2 light-blue center">2,50%</div>
                </div>
                <div className="coluna-6 flex">
                <div className="coluna-2"></div>
                  <div className="coluna-8">
                    <p className='padding-10'>
                      Demais tarifas
                    </p>
                  </div>
                  <div className="coluna-2 center"></div>
                </div>
              </div>
              <div className="linha">
                <div className="coluna-6">
                  <div className="coluna-8">
                    <p className="obs">
                      *Por parcela
                    </p>
                  </div>
                  <div className="coluna-2"></div>
                  <div className="coluna-2"></div>
                </div>
                <div className="coluna-6 flex">
                  <div className="coluna-2"></div>
                  <div className="coluna-8 white">
                    <p className='padding-10'>
                      Boleto por compensação
                    </p>
                  </div>
                  <div className="coluna-2 dark-blue center">R$ 3,49</div>
                </div>
              </div>
              <div className="linha margin-top-5">
                <div className="coluna-6 flex">
                  <div className="coluna-8">Prazo de antecipação</div>
                  <div className="coluna-2 center"></div>
                  <div className="coluna-2 center"></div>
                </div>
                <div className="coluna-6 flex">
                  <div className="coluna-2"></div>
                  <div className="coluna-8 white">
                    <p className='padding-10'>
                      PIX
                    </p>
                  </div>
                  <div className="coluna-2 dark-blue center">1,19%</div>
                </div>
              </div>
              <div className="linha margin-top-5">
                <div className="coluna-6 flex">
                  <div className="coluna-8 white">
                    <p className='padding-10'>
                      Crédito à vista
                    </p>
                  </div>
                  <div className="coluna-2 dark-blue center">10 dias</div>
                  <div className="coluna-2 light-blue center">2 dias</div>
                </div>
                <div className="coluna-6 flex">
                  <div className="coluna-2"></div>
                  <div className="coluna-8 white">
                    <p className='padding-10'>
                      Taxa por transação
                    </p>
                  </div>
                  <div className="coluna-2 dark-blue center">R$ 0,90</div>
                </div>
              </div>
              <div className="linha margin-top-5">
                <div className="coluna-6 flex">
                  <div className="coluna-8 white">
                    <p className='padding-10'>
                      Parcelado
                    </p>
                  </div>
                  <div className="coluna-2 dark-blue center">30 dias</div>
                  <div className="coluna-2 light-blue center">3 dias</div>
                </div>
                <div className="coluna-6 flex">
                  <div className="coluna-2"></div>
                  <div className="coluna-8 white">
                    <p className='padding-10'>
                      Saque
                    </p>
                  </div>
                  <div className="coluna-2 dark-blue center">R$ 3,00</div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
