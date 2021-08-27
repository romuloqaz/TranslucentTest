import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Catalog from '../pages/Catalog';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Catalog} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
