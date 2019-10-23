import { types } from 'mobx-state-tree';
import { TaskStatus, Task } from '../interfaces/Task.interface';
import TaskModel from './Task.model';
import apiInstance from '../libs/api-service';

const TaskStoreModel = types
  .model('TaskStore', {
    waiting: types.array(TaskModel),
    inprogress: types.array(TaskModel),
    inreview: types.array(TaskModel),
    done: types.array(TaskModel)
  })
  .actions(self => ({
    addTask(task: Task) {
      switch (task.status) {
        case TaskStatus.WAITING:
          self.waiting.push(task);
          break;
        case TaskStatus.IN_REVIEW:
          self.inreview.push(task);
          break;
        case TaskStatus.IN_PROGRESS:
          self.inprogress.push(task);
          break;
        case TaskStatus.DONE:
          self.done.push(task);
          break;
        default:
          self.waiting.push(task);
          break;
      }
    },
    async fetchTasks() {
      const tasks = await apiInstance.get('tasks');
      console.log('Tasks', tasks);
    }
  }));

export default TaskStoreModel;