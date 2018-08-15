import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import CheckAuth from './components/CheckAuth';
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import Messages from './components/Messages';
import PageNotFound from './components/PageNotFound';
import './App.scss';

const MainSecure = CheckAuth(Main);
const MessagesSecure = CheckAuth(Messages);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/" exact component={MainSecure} />
          <Route path="/profile/" exact component={MainSecure} />
          <Route path="/profile/:userId" component={Profile} />
          <Route path="/messages/:peerId?" component={MessagesSecure} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
