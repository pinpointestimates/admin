import React, { lazy, Suspense } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import Loading from './Loading';

// Pages
import Home from '../pages/Home';

// Lazyloaded pages
const Admin = lazy(() => import('../pages/Admin'));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Admin} />
          {/*<Route path='/404' component={PageNoteFound} /> */}
          <Redirect to='/404' />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;