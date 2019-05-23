import * as React from 'react';
import { types, resolvePath } from 'mobx-state-tree';

import AuthStore from './Auth';

const RootStore = types
  .model('RootStore', {
    authStore: AuthStore,
  })
  .actions(self => ({
    get(paths: string) {
      const parts = paths.split('/');
      return resolvePath(self, parts.map(part => `${part}Store`).join('/'));
    },
  }));

const rootStore = RootStore.create({
  authStore: { admin: {} },
});

export default rootStore;
