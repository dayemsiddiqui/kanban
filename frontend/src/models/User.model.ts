import { types, Instance, SnapshotOut } from 'mobx-state-tree';

const UserStoreModel = types
  .model('User', {
    isAuthenticated: types.boolean,
    uid: types.string,
    email: types.string,
    displayName: types.string
  })
  .actions(self => ({
    setEmail(email: string) {
      self.email = email;
    },
    setUID(uid: string) {
      self.uid = uid;
    },
    setAuthenticated() {
      self.isAuthenticated = true;
    },
    setUnAuthenticated() {
      self.isAuthenticated = false;
    },
    setDisplayName(displayName: string) {
      self.displayName = displayName;
    }
  }));

export type UserStoreModel = Instance<typeof UserStoreModel>;
export type UserStoreSnapshot = SnapshotOut<typeof UserStoreModel>;

export default UserStoreModel;
