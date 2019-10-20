import { useState } from 'react';

const useModal = (initialValue: boolean) => {
  const [modal, setModal] = useState(initialValue);
  const toggle = () => setModal(!modal);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return {
    modal,
    toggle,
    openModal,
    closeModal
  };
};

export default useModal;
