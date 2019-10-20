import React from 'react';
import { Modal, ModalHeader, ModalProps } from 'reactstrap';

interface ModalComponentProps {
  title: string;
  modal: boolean;
}

const ModalComponent: React.FC<ModalProps & ModalComponentProps> = ({
  children,
  className,
  title,
  modal
}) => {
  return (
    <div>
      <Modal isOpen={modal} className={className}>
        <ModalHeader>{title}</ModalHeader>
        {children}
      </Modal>
    </div>
  );
};

export default ModalComponent;
