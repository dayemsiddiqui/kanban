import TaskStoreModel from './TaskStore.model';
import { onSnapshot } from 'mobx-state-tree';

export const taskStore = TaskStoreModel.create({});

onSnapshot(taskStore, snapshot => {
  console.dir(snapshot);
});
