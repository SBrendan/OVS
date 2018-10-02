import 'rxjs';
import 'es5-shim';
import 'es6-promise';
import 'es6-shim';
import 'prop-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { history, store } from './store';
import App from './elements/app';

import './main.scss';
import './flex.scss';

const render = (Root: any) => {
  ReactDOM.render(
    <AppContainer>{Root}</AppContainer>,
    document.getElementById('root'),
  );
};

render(<App history={history} store={store} />);
if ((module as any).hot) {
  (module as any).hot.accept('./elements/app', () => {
    const NextApp = require('./elements/app');
    render(<NextApp history={history} store={store} />);
  });
}
