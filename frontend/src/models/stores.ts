import TaskStoreModel from './TaskStore.model';
import { onSnapshot } from 'mobx-state-tree';
import UserStoreModel from './User.model';

export const taskStore = TaskStoreModel.create({});
export const userStore = UserStoreModel.create({
  isAuthenticated: false,
  email: '',
  uid: '',
  displayName: ''
});

onSnapshot(taskStore, snapshot => {
  console.dir(snapshot);
});
