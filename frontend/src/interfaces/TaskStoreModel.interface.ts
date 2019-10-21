import { Task } from './Task.interface';

export interface TaskStoreModel {
  waiting: Task[];
  inprogress: Task[];
  inreview: Task[];
  done: Task[];
  addTask: (task: Task) => void;
}
