import React, { Component } from 'react';
import ChatView from './modules/chat';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';
import Accounts from './modules/accounts';
import Invests from './modules/invests';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ChatView/>
        <Switch location={this.props.location}>
          <Route path='/investments' component={Invests} />
          <Route render={() => (
            <div>
              <Accounts />
              {!(this.props.location && this.props.location.pathname === '/accounts') && <Redirect to='/accounts'/>}
            </div>
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({ location: state.routing.locationBeforeTransitions })
)(App);
