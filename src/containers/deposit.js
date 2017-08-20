import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Deposit from '../components/deposit';
import Transaction from '../components/transaction';
import { sendTransaction } from '../actions/chat';

import './account.css';
import './accounts.css';

class DepositView extends React.PureComponent {
  render() {
    const id = this.props.match.params.id;
    const deposit = this.props.deposits.find(acc => String(acc.id) === id);
    return (
      <div className='account_container' >
        <div className='account_view'>
          <Deposit {...deposit} opened/>
        </div>
        <span className='history_string'>История операций</span>
        <div className='transactions_list' style={{ top: 176 }}>
          {deposit.transfers.map((transfer, index) => (
            <Transaction
              key={transfer.id}
              {...transfer}
              currency={deposit.currency}
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
    ...state.deposits
  }),
  dispatch => bindActionCreators({ sendTransaction }, dispatch)
)(DepositView);
