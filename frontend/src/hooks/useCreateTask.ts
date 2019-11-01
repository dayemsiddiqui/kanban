import { useState } from 'react';
import apiInstance from '../libs/api-service';
import { CreateTaskResponse } from '../interfaces/TaskResponse.interface';
import { TaskStatus } from '../interfaces/Task.interface';
import { sanitizeTask } from '../libs/sanitize-response';
import { taskStore } from '../models/stores';

type createTaskPostData = {
  label: string;
  description: string;
  status: TaskStatus;
  email: string;
  uid: string;
};

const useCreateTask = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const createTask = (data: createTaskPostData) => {
    setSubmitting(true);
    apiInstance.post<CreateTaskResponse>('tasks', data).then(response => {
      let task;
      if (response) {
        task = sanitizeTask(response.data.payload);
        taskStore.addTask(task);
      }
      setSubmitting(false);
    });
  };
  return {
    submitting,
    createTask
  };
};

export default useCreateTask;
