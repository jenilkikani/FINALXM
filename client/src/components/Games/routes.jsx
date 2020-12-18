import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './index';
import Edit from './Edit';
import New from  './New';
import Form from './Form';
import Destroy from './Destroy';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/edit/:id" component={Edit}/>
      <Route exact path="/form" component={Form}/>
      <Route exact path="/new" component={New}/>
      <Route exact path="/destroy/:id" component={Destroy}/>
    </Switch>
  );
}
 
export default Routes;