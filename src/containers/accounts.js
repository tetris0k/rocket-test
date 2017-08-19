import React from 'react';
import { Link } from 'react-router-dom';
import './accounts.css';

const AccountsView = () => (
  <div className='accounts-root'>
    Accounts
    <br/>
    <Link to='/investments'>To investments</Link>
  </div>
);

export default AccountsView;
