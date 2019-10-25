import { Task, TaskStatus } from './Task.interface';

export interface TaskStoreSnapshot {
  waiting: Task[];
  inprogress: Task[];
  inreview: Task[];
  done: Task[];
}

export interface TaskStoreView {
  getWaitingTaskByIndex: (index: number) => Task;
  getInProgressTaskByIndex: (index: number) => Task;
  getInReviewTaskByIndex: (index: number) => Task;
  getDoneTaskByIndex: (index: number) => Task;
  getTaskByIndex: (listType: TaskStatus, index: number) => Task;
}

export interface TaskStoreModel extends TaskStoreSnapshot, TaskStoreView {
  addTask: (task: Task) => void;
  setWaitingTasks: (tasks: Task[]) => void;
  setInProgressTasks: (tasks: Task[]) => void;
  setInReviewTasks: (tasks: Task[]) => void;
  setDoneTasks: (tasks: Task[]) => void;
  moveTask: (
    fromListType: TaskStatus,
    toListType: TaskStatus,
    fromIndex: number,
    toIndex: number
  ) => void;
}
