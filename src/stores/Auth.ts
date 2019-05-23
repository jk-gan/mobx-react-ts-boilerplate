import { types, flow } from 'mobx-state-tree';

import http from '../utils/http';
import Request from '../utils/Request';
import Admin from '../models/Admin';

const AuthStore = types
  .model('AuthStore', {
    accessToken: '',
    admin: Admin,
  })
  .actions(self => ({
    login: flow(function* login(req) {
      const request = new Request(req);
      try {
        const response = yield http.POST('/login', request.body);
        const { item } = response;
        localStorage.setItem('accessToken', item.accessToken);
        self.accessToken = item.accessToken;
        request.success(item);
      } catch (e) {
        console.error(e);
        request.error(e);
      } finally {
        request.finally();
      }
    }),
    logout() {
      localStorage.removeItem('accessToken');
      location.replace('/');
    },
  }))
  .views(self => ({
    get currentAdmin() {
      return self.admin;
    },
  }));

export default AuthStore;
