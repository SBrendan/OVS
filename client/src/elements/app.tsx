import * as React from 'react';
import { Store as ReduxStore } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { Layout } from './layout';
import 'semantic-ui-css/semantic.css';

// Types
import { History } from 'history';
import { Store } from '../store.d';

export interface IAppProps { history: History; store: ReduxStore<Store>; }

const App = (props: IAppProps) => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path='/' component={Layout} />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
