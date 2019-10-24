import { useState } from 'react';
import { onSnapshot } from 'mobx-state-tree';
import { taskStore } from '../models/stores';
import { TaskStoreSnapshot } from '../interfaces/TaskStoreModel.interface';

const useObserveTaskStore = (initialValue?: TaskStoreSnapshot) => {
  const [snapshot, setSnapshot] = useState<TaskStoreSnapshot>(
    initialValue || {
      waiting: [],
      inprogress: [],
      inreview: [],
      done: []
    }
  );
  onSnapshot(taskStore, newSnapshot => {
    setSnapshot(newSnapshot);
  });
  return {
    snapshot
  };
};

export default useObserveTaskStore;
