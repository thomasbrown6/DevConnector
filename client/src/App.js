import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; 

//Redux
import { Provider } from 'react-redux';
import store from './store';

import { Navbar, Home } from './components/layout';
import Alert from './components/layout/Alert';
import { Login } from './components/auth';
import Register from './components/auth/Register';

const App = () => (
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Home} />
      <section className='container'>
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
  </Provider>
);


export default App;
