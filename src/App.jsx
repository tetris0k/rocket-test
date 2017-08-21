import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ChatView from './containers/chat';
import Accounts from './containers/accounts';
import Deposits from './containers/deposits';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className='App'>
        <ChatView/>
        <Switch>
          <Route path='/deposits' component={Deposits} />
          <Route render={() => (
            <div>
              <Accounts />
              {!this.props.location.pathname.startsWith('/accounts') && <Redirect to='/accounts'/>}
            </div>
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({ location: ownProps.location })
)(App);
