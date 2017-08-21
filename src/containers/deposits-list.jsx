import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Deposit from '../components/deposit';

import './right-side-items-list.css';

class DepositsList extends React.PureComponent {
  static propTypes = {
    deposits: PropTypes.array.isRequired
  };
  render() {
    return (
      <div className='right_side_items_list'>
        {this.props.deposits.map((item, index) =>
          <Deposit
            key={item.id}
            {...item}
            isDark={Boolean(index % 2)}
          />)}
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.deposits
  })
)(DepositsList);
