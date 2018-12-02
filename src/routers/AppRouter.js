import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
const routes = (
<Switch>
   <Route path="/" component={DashBoard} exact={true} />
   <Route path="/help" component={Help} />
   <Route component={NotFound} />
</Switch>
);
const AppRouter = () => (
<BrowserRouter>
   <div className='container'>
      <Header />
      {routes}
   </div>
</BrowserRouter>
);
export default AppRouter;