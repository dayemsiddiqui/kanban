import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Board from '../Board/Board';
import useModal from '../../hooks/useModal';
import CreateTask from '../CreateTask/CreateTask';
import { TaskStoreProvider } from '../../hooks/useTaskStore';
import { taskStore } from '../../models/stores';

const Home: React.FC = () => {
  const { modal, openModal, closeModal } = useModal(false);
  return (
    <>
      <NavBar onAddTaskClick={openModal} />
      <TaskStoreProvider value={taskStore}>
        <Board />
        <CreateTask modal={modal} closeModal={closeModal} />
      </TaskStoreProvider>
    </>
  );
};

export default Home;
