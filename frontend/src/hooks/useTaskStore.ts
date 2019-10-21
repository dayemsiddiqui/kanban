import { createContext, useContext } from 'react';
import { TaskStoreModel } from '../interfaces/TaskStoreModel.interface';

const TaskStoreContext = createContext<TaskStoreModel>({} as TaskStoreModel);

export const useTaskStore = () => useContext(TaskStoreContext);
export const TaskStoreProvider = TaskStoreContext.Provider;
