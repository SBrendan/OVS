import { applyMiddleware, createStore, Store as ReduxStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory, History } from 'history';
import { rootEpic } from './epics';
import { reducers } from './reducers';

// Types
import { Store } from './store.d';

// Create a history of your choosing (we're using a browser history in this case)
const history: History = createBrowserHistory({basename: baseUrl});

// Configure middlewares
const rMiddleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware(rootEpic);
let middlewares = applyMiddleware(rMiddleware, epicMiddleware);
if (process.env.NODE_ENV !== 'production') {
  // Dev dependencies
  middlewares = composeWithDevTools(middlewares);
}

// Add the reducer to your store on the `routing` key
const store: ReduxStore<Store> = createStore<Store>(
  reducers,
  middlewares,
);

export { store, history };
