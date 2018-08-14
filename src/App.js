import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import CheckAuth from './components/hoc/CheckAuth';
import Profile from './components/Profile';
import Messages from './components/Messages';
import PageNotFound from './components/common/PageNotFound';
import './App.scss';

const MessagesSecure = CheckAuth(Messages);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={MessagesSecure} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
