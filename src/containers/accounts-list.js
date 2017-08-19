import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AccountsList extends React.PureComponent {
  static propTypes = {
    accounts: PropTypes.array.isRequired
  };
  render() {
    return (
      <div>list</div>
    );
  }
}

export default connect(
  state => ({
    ...state.accounts
  })
)(AccountsList);
