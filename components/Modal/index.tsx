import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { StyledModal, StyledModalBody, StyledModalHeader, StyledModalOverlay, StyledModalTitle } from './styled';

interface IModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
}

const Modal: React.FC<IModalProps> = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const handleOverlayClick = () => {
    if (!isFocused) onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay onClickCapture={handleOverlayClick}>
      <StyledModal onMouseEnter={() => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)}>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root')!);
  } else {
    return null;
  }
};

export default Modal;
