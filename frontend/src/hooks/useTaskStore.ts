import { createContext, useContext } from 'react';
import { TaskStoreModel } from '../models/TaskStore.model';

const TaskStoreContext = createContext<TaskStoreModel>({} as TaskStoreModel);

export const useTaskStore = () => useContext(TaskStoreContext);
export const TaskStoreProvider = TaskStoreContext.Provider;
