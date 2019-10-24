import { Task } from '../interfaces/Task.interface';

export const sanitizeTask = (task: Task) => {
  if (task.archieved === undefined) {
    task.archieved = false;
  }
  if (task.pinned === undefined) {
    task.pinned = false;
  }
  return task;
};
