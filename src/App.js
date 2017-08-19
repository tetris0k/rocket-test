import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ChatView from './containers/chat';
import Accounts from './containers/accounts';
import Invests from './containers/invests';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className='App'>
        <ChatView/>
        <Switch>
          <Route path='/investments' component={Invests} />
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
