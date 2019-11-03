import { types, Instance } from 'mobx-state-tree';
import { TaskStatus, Task } from '../interfaces/Task.interface';
import TaskModel from './Task.model';
import { cast } from 'mobx-state-tree';
import { sanitizeTask } from '../libs/sanitize-response';

const TaskStoreModel = types
  .model('TaskStore', {
    waiting: types.array(TaskModel),
    inprogress: types.array(TaskModel),
    inreview: types.array(TaskModel),
    done: types.array(TaskModel)
  })
  .views(self => ({
    getWaitingTaskByIndex(index: number) {
      return self.waiting[index];
    },
    getInProgressTaskByIndex(index: number) {
      return self.inprogress[index];
    },
    getInReviewTaskByIndex(index: number) {
      return self.inreview[index];
    },
    getDoneTaskByIndex(index: number) {
      return self.done[index];
    },
    getTaskList(listType: TaskStatus) {
      switch (listType) {
        case TaskStatus.WAITING:
          return self.waiting;
        case TaskStatus.IN_REVIEW:
          return self.inreview;
        case TaskStatus.IN_PROGRESS:
          return self.inprogress;
        case TaskStatus.DONE:
          return self.done;
        default:
          return self.waiting;
      }
    }
  }))
  .views(self => ({
    getTaskByIndex(listType: TaskStatus, index: number) {
      let taskList = self.getTaskList(listType);
      return taskList[index];
    }
  }))
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
    }
  }))
  .actions(self => ({
    setWaitingTasks(tasks: Task[]) {
      const waiting = tasks
        .filter(task => task.status === TaskStatus.WAITING)
        .map(task => sanitizeTask(task));
      self.waiting = cast(waiting);
    },
    setInProgressTasks(tasks: Task[]) {
      const inprogress = tasks
        .filter(task => task.status === TaskStatus.IN_PROGRESS)
        .map(task => sanitizeTask(task));
      self.inprogress = cast(inprogress);
    },
    setInReviewTasks(tasks: Task[]) {
      const inreview = tasks
        .filter(task => task.status === TaskStatus.IN_REVIEW)
        .map(task => sanitizeTask(task));
      self.inreview = cast(inreview);
    },
    setDoneTasks(tasks: Task[]) {
      const done = tasks
        .filter(task => task.status === TaskStatus.DONE)
        .map(task => sanitizeTask(task));
      self.done = cast(done);
    }
  }))
  .actions(self => ({
    deleteWaitingTasks(id: string) {
      const waiting = self.waiting.filter(task => task.id !== id);
      self.waiting = cast(waiting);
    },
    deleteInProgressTasks(id: string) {
      const inprogress = self.inprogress.filter(task => task.id !== id);
      self.inprogress = cast(inprogress);
    },
    deleteInReviewTasks(id: string) {
      const inreview = self.inreview.filter(task => task.id !== id);
      self.inreview = cast(inreview);
    },
    deleteDoneTasks(id: string) {
      const done = self.done.filter(task => task.id !== id);
      self.done = cast(done);
    }
  }))
  .actions(self => ({
    deleteTaskByIndex(listType: TaskStatus, index: number) {
      let taskList = self.getTaskList(listType);
      taskList.splice(index, 1);
    }
  }))
  .actions(self => ({
    addTaskOnIndex(listType: TaskStatus, index: number, task: Task) {
      let taskList = self.getTaskList(listType);
      taskList.splice(index, 0, task);
    }
  }))
  .actions(self => ({
    moveTask(
      fromListType: TaskStatus,
      toListType: TaskStatus,
      fromIndex: number,
      toIndex: number
    ) {
      const task = {
        ...self.getTaskByIndex(fromListType, fromIndex),
        status: toListType
      };
      self.addTaskOnIndex(toListType, toIndex, task);
      self.deleteTaskByIndex(fromListType, fromIndex);
    }
  }));

export type TaskStoreModel = Instance<typeof TaskStoreModel>;
export default TaskStoreModel;
