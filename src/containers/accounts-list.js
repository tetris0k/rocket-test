import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Account from '../components/account';
import './accounts-list.css';

class AccountsList extends React.PureComponent {
  static propTypes = {
    accounts: PropTypes.array.isRequired
  };
  render() {
    return (
      <div className='accounts_list'>
        {this.props.accounts.map((account, index) =>
          <Account
            key={account.id}
            id={account.id}
            sum={account.sum}
            currency={account.currency}
            percent={account.percent}
            createdAt={account.createdAt}
            lastTransfer={account.transfers[0]}
            isDark={Boolean(index % 2)}
          />)}
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.accounts
  })
)(AccountsList);
