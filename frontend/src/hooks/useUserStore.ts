import { createContext, useContext } from 'react';
import { UserStoreModel } from '../models/User.model';

const UserStoreContext = createContext<UserStoreModel>({} as UserStoreModel);

export const useUserStore = () => useContext(UserStoreContext);
export const UserStoreProvider = UserStoreContext.Provider;
