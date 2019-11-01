import { Task } from '../interfaces/Task.interface';

export const sanitizeTask = (task: Task) => {
  if (task.archieved === undefined) {
    task.archieved = false;
  }
  if (task.pinned === undefined) {
    task.pinned = false;
  }
  if (task.uid === undefined) {
    task.uid = '';
  }
  if (task.email === undefined) {
    task.email = '';
  }
  return task;
};
