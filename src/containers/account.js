import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//import { Link } from 'react-router-dom';
import Account from '../components/account';

import './account.css';
import './accounts.css';

class AccountView extends React.PureComponent {
  render() {
    const id = this.props.match.params.id;
    const account = this.props.accounts.find(acc => acc.id === id);
    return (
      <Account {...account} linkTo='/accounts' opened/>
    );
  }
}

export default connect(
  state => ({
    ...state.accounts
  })
)(AccountView);
