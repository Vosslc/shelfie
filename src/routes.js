import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'

export default (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route  path={`/edit/:id`} component={Form}/>
    <Route  path={`/add/`} component={Form}/>
  </Switch>
)