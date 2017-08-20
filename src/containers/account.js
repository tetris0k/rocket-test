import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Link } from 'react-router-dom';
import Account from '../components/account';
import Transaction from '../components/transaction';
import { sendTransaction } from '../actions/chat';

import './account.css';
import './accounts.css';

class AccountView extends React.PureComponent {
  render() {
    const id = this.props.match.params.id;
    const account = this.props.accounts.find(acc => acc.id === id);
    return (
      <div className='account_container' >
        <div className='account_view'>
          <Account {...account} linkTo='/accounts' opened/>
        </div>
        <span className='history_string'>История операций</span>
        <div className='transactions_list'>
          {account.transfers.map((transfer, index) => (
            <Transaction
              key={transfer.id}
              {...transfer}
              currency={account.currency}
              isDark={Boolean(index % 2)}
              onPress={this.props.sendTransaction}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.accounts
  }),
  dispatch => bindActionCreators({ sendTransaction }, dispatch)
)(AccountView);
