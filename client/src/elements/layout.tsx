import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';

import { NavBar } from './common/navbar.component';
import { Home } from './common/home.component';
import { NotFound } from './common/notfound.component';

// Styles
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

// LayoutComponent Component
export const Layout = () => {
  return (
    <div className='layout vertical start-justified'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
      <ReduxToastr
        timeOut={5000}
        preventDuplicates
        position='bottom-right'
        progressBar
      />
    </div>
  );
};
