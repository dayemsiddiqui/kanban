import { TaskStatus } from '../interfaces/Task.interface';
import { useState } from 'react';
import apiInstance from '../libs/api-service';
import { taskStore } from '../models/stores';

const useMoveTask = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const moveTask = (
    fromListType: TaskStatus,
    toListType: TaskStatus,
    fromIndex: number,
    toIndex: number
  ) => {
    const movedTask = {
      ...taskStore.getTaskByIndex(fromListType, fromIndex),
      status: toListType
    };
    taskStore.moveTask(fromListType, toListType, fromIndex, toIndex);
    setSubmitting(true);
    apiInstance.put(`tasks/${movedTask.id}`, movedTask).then(response => {
      console.log('Response', response);
      if (response && response.status === 200) {
        setSubmitting(false);
      } else {
        // Revert the task postion
        taskStore.moveTask(toListType, fromListType, toIndex, fromIndex);
      }
    });
  };
  return {
    submitting,
    moveTask
  };
};

export default useMoveTask;
