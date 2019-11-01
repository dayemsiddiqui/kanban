import { types } from 'mobx-state-tree';
import { TaskStatus } from '../interfaces/Task.interface';

const TaskModel = types
  .model('Task', {
    id: types.identifier,
    label: types.string,
    description: types.string,
    status: types.enumeration('TaskStatus', [
      TaskStatus.DONE,
      TaskStatus.IN_PROGRESS,
      TaskStatus.IN_REVIEW,
      TaskStatus.WAITING
    ]),
    pinned: types.boolean,
    archieved: types.boolean,
    uid: types.string,
    email: types.string
  })
  .actions(self => ({
    changeStatus(status: TaskStatus) {
      self.status = status;
    }
  }));

export default TaskModel;
