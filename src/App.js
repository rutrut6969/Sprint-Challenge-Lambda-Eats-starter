import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Help from './Components/Help';
import Form from './Components/Form';
import { Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path='/help'>
          <Help />
        </Route>
        <Route path='/form'>
          <Form />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
