import React from 'react';

import './account.css';

class Account extends React.PureComponent {
  render() {
    console.log(this.props.match.params.id);
    return (
      <div>view {this.props.match.params.id}</div>
    );
  }
}

export default Account;
