import React from 'react';
import './Notification.css';
import { Container } from './styles'
import vector from '../../assets/Modal/Vector.png';
import closed from '../../assets/Modal/Closed.png';

const Notification = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="notification-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" style={{ cursor: 'pointer' }} onClick={onClose}>
              <img src={closed} alt="Fechar" />
            </span>
            <Container>
              <div>
                <img src={vector} alt="Confirmação" />
              </div>
              <div className='text'>
                Finalize seu cadastro na plataforma e acesse seu e-mail para validação.
              </div>
              <div>
                <button type="button" style={{ cursor: 'pointer' }} onClick={onClose}> Acessar plataforma </button>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
