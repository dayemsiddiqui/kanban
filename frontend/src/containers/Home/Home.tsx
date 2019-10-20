import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Board from '../Board/Board';
import useModal from '../../hooks/useModal';
import CreateTask from '../CreateTask/CreateTask';

const Home: React.FC = () => {
  const { modal, openModal, closeModal } = useModal(false);
  return (
    <>
      <NavBar onAddTaskClick={openModal} />
      <Board />
      <CreateTask modal={modal} closeModal={closeModal} />
    </>
  );
};

export default Home;
