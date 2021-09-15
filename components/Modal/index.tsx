import React, { useEffect, useState } from 'react';
import { ONE_MONTH_IN_DAYS, ONE_WEEK_IN_DAYS, SUBSCRIPTION_COOKIE } from '../../utils/constants';
import { setCookie } from '../../utils/cookies';

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
    setCookie(SUBSCRIPTION_COOKIE, 'false', ONE_MONTH_IN_DAYS);

    onClose();
  };

  const handleOverlayClick = () => {
    setCookie(SUBSCRIPTION_COOKIE, 'false', ONE_WEEK_IN_DAYS);

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
    return modalContent;
  } else {
    return null;
  }
};

export default Modal;
