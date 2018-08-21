import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import CheckAuth from './components/CheckAuth';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Messages from './components/Messages';
import PageNotFound from './components/PageNotFound';
import style from './App.module.scss';

const MainSecure = CheckAuth(Main);
const MessagesSecure = CheckAuth(Messages);

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <div className={style.layout}>
          <Navigation />
          <div className={style.content}>
            <Switch>
              <Route path="/" exact component={MainSecure} />
              <Route path="/profile/" exact component={MainSecure} />
              <Route path="/profile/:userId" component={Profile} />
              <Route path="/messages/:peerId?" component={MessagesSecure} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
