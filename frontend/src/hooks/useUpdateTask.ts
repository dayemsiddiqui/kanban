import { Task } from '../interfaces/Task.interface';
import { useState } from 'react';
import apiInstance from '../libs/api-service';

const useUpdateTask = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const updateTask = (updatedTask: Task) => {
    setSubmitting(true);
    apiInstance.put(`tasks/${updatedTask.id}`, updatedTask).then(() => {
      setSubmitting(false);
    });
  };
  return {
    submitting,
    updateTask
  };
};

export default useUpdateTask;
