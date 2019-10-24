import { Task } from './Task.interface';

export interface TaskResponse {
  payload: Task[];
  status: string;
}

export interface CreateTaskResponse {
  payload: Task;
  status: string;
}
