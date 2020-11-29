import React from 'react';
import { uniqueId } from 'lodash';
import { Route, Switch } from 'react-router-dom';

import Routes from '../../routes';

const Body = () => {
  const routes = Routes.map((item) => (
    <Route key={uniqueId()} exact={item.path === '/'} path={item.path} component={item.component} />
  ));
  return (
    <Switch>
      {routes}
    </Switch>
  );
};
export default Body;
