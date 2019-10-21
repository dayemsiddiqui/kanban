import TaskStoreModel from './TaskStore.model';
import { TaskStatus, Task } from '../interfaces/Task.interface';

const tasks: Task[] = [
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING },
  { id: '1', label: 'Task 1', description: 'test', status: TaskStatus.WAITING }
];

export const taskStore = TaskStoreModel.create({ waiting: tasks });
