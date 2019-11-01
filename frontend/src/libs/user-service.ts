export class UserService {
  private user: firebase.User = {} as firebase.User;
  private userExists: boolean;

  constructor() {
    const userFromLocalStorage = window.localStorage.getItem('user');
    if (userFromLocalStorage) {
      this.user = JSON.parse(userFromLocalStorage) as firebase.User;
      this.userExists = true;
    } else {
      this.userExists = false;
    }
  }

  isValid() {
    return this.userExists;
  }

  getEmail() {
    if (this.user.email) {
      return this.user.email;
    }
    return '';
  }
  getUID() {
    if (this.user.uid) {
      return this.user.uid;
    }
    return '';
  }
}
