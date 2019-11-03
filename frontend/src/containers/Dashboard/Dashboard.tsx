import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Board from '../Board/Board';
import useModal from '../../hooks/useModal';
import CreateTask from '../CreateTask/CreateTask';
import { TaskStoreProvider } from '../../hooks/useTaskStore';
import { taskStore } from '../../models/stores';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

const Dashboard: React.FC = () => {
  const { modal, openModal, closeModal } = useModal(false);
  const { user, signOut } = useFirebaseAuth();
  return (
    <>
      <NavBar
        onAddTaskClick={openModal}
        onLogoutClick={signOut}
        displayName={user.displayName}
      />
      <TaskStoreProvider value={taskStore}>
        <Board />
        <CreateTask modal={modal} closeModal={closeModal} />
      </TaskStoreProvider>
    </>
  );
};

export default Dashboard;
