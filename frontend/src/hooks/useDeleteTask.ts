import { useState } from 'react';
import apiInstance from '../libs/api-service';
import { taskStore } from '../models/stores';
import { Task, TaskStatus } from '../interfaces/Task.interface';

const deleteTaskCommand = {
  [TaskStatus.WAITING]: taskStore.deleteWaitingTasks,
  [TaskStatus.IN_PROGRESS]: taskStore.deleteInProgressTasks,
  [TaskStatus.IN_REVIEW]: taskStore.deleteInReviewTasks,
  [TaskStatus.DONE]: taskStore.deleteDoneTasks
};

const useDeleteTask = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const deleteTask = (task: Task) => {
    setSubmitting(true);
    apiInstance.delete(`tasks/${task.id}`).then(() => {
      deleteTaskCommand[task.status](task.id);
      setSubmitting(false);
    });
  };
  return {
    submitting,
    deleteTask
  };
};

export default useDeleteTask;
