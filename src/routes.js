import React from 'react';
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'
import {Switch, Route} from 'react-router-dom'

export default (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route  path={`/add/:id`} component={Form}/>
    <Route  path='/add' component={Form}/>
  </Switch>
)