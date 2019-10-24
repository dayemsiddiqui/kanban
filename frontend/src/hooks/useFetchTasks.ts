import { useEffect, useState } from 'react';
import apiInstance from '../libs/api-service';
import { TaskResponse } from '../interfaces/TaskResponse.interface';
import { Task } from '../interfaces/Task.interface';
import { taskStore } from '../models/stores';

const useFetchTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    apiInstance
      .get<TaskResponse>('tasks')
      .then(response => {
        if (response) {
          setTasks(response.data.payload);
        }
      })
      .catch(err => {
        console.log('Failed to fetch tasks', err);
      });
  }, []);
  useEffect(() => {
    taskStore.setWaitingTasks(tasks);
    taskStore.setInProgressTasks(tasks);
    taskStore.setInReviewTasks(tasks);
    taskStore.setDoneTasks(tasks);
  }, [tasks]);
};

export default useFetchTasks;
