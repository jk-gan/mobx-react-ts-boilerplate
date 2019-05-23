import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Portal from './master/Portal';

import { StoreContext } from './contexts';
import rootStore from './stores/Root';

export default () => (
  <StoreContext.Provider value={rootStore}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Portal>
          <Route exact path="/dashboard" component={Dashboard} />
        </Portal>
      </Switch>
    </Router>
  </StoreContext.Provider>
);
