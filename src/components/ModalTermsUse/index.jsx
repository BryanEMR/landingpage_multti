import React from 'react';
import './ModalTermsUse.css';
import { Container } from './styles'
import closed from '../../assets/Modal/Closed.png';

const ModalTermsUse = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" style={{ cursor: 'pointer' }} onClick={onClose}>
              <img src={closed} alt="Fechar" />
            </span>
            <Container>
              <div className='title'>
                COMO FUNCIONA A PLATAFORMA MPAYS
              </div>
              <br />
              <div className='text'>
                Fizemos o máximo para reduzir e simplificar as regras do nosso Site e SaaS. Por isso, separamos abaixo os pontos mais importantes para você, que também podem ser lidos de forma bem completa e detalhada nos nossos Termos de Uso.
              </div>
              <br />
              <div className='text'>
                Além disso, estamos sempre disponíveis para tirar qualquer dúvida que você tenha na plataforma MPays através do e-mail: financeiro@multti.com ou pelo telefone (51) 99980-0020.
              </div>
              <br />
              <div className='text bold'>
                {"1) O que fazemos?"}
              </div>
              <br />
              <div className='text'>
                Somos uma empresa de tecnologia que desenvolve soluções inteligentes para transações de pagamento realizados no e-commerce com cartão de crédito, débito, boleto e PIX.
              </div>
              <br />
              <div className='text'>
                O foco principal da empresa é o desenvolvimento de Sistemas Gerenciais de Negócios com um olhar voltado para modelos de negócio tipo SaaS e que possuam intermediação de pagamentos.
              </div>
              <br />
              <div className='text'>
                Atualmente nossos serviços estão disponíveis em dois planos de contratação, o plano: (i) padrão e o (ii) caixa rápido. Além disso, oferecemos serviços para solicitação de saque dos valores disponíveis, antecipação de recebível de crédito à vista, com prazo de até 2 (dois) dias úteis (disponível no plano Caixa Rápido) e em até 10 (dez) dias úteis no plano Padrão. Para a antecipação de recebíveis de crédito parcelado o prazo é de 3 (três) dias úteis para o plano de Caixa Rápido e 30 (trinta) dias úteis para o plano Padrão.
              </div>
              <br />
              <div className='text bold'>
                {"2) Como o nosso SaaS funciona?"}
              </div>
              <br />
              <div className='text'>
                Os usuários terão que criar uma conta de acesso (login e senha) para acessar a plataforma e os serviços. Atualmente há três tipos de usuários:
              </div>
              <br />
              <div className='text flex'>
                <div className='dot'>•</div>
                Administrador Mpays: Usuário master, onde terá acesso aos dados de todas as lojas, extratos das transações, extratos das contas, solicitações de saque, usuários cadastrados pelas lojas e configuração das taxas dos planos.
              </div>
              <br />
              <div className='text flex'>
                <div className='dot'>•</div>
                Administrador loja: Usuário que terá acesso aos dados da de sua empresa, extrato das transações, extrato da sua conta, solicitações de saque e cadastro de usuários que poderão acessar as informações da loja.
              </div>
              <br />
              <div className='text flex'>
                <div className='dot'>•</div>
                Usuário da loja: Usuário que o administrador cadastrar. Ele poderá ser limitado a visualização dos menus da plataforma. Você poderá consultar o extrato da conta onde é apresentada todas as movimentações da conta de sua empresa e a possibilidade de que a empresa cadastre seus funcionários para acesso a plataforma de forma personalizada, sendo possível bloquear sua visualização a determinadas telas através do perfil de acesso do usuário cadastrado pela loja.
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTermsUse;
