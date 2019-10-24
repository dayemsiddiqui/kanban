import { Task } from './Task.interface';

export interface TaskStoreSnapshot {
  waiting: Task[];
  inprogress: Task[];
  inreview: Task[];
  done: Task[];
}

export interface TaskStoreModel extends TaskStoreSnapshot {
  addTask: (task: Task) => void;
  setWaitingTasks: (tasks: Task[]) => void;
  setInProgressTasks: (tasks: Task[]) => void;
  setInReviewTasks: (tasks: Task[]) => void;
  setDoneTasks: (tasks: Task[]) => void;
}
