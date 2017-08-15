import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const AccountsView = () => (
  <div className='accounts-root'>
    Accounts
    <Link to='/investments'>To invests</Link>
  </div>
);

export default AccountsView;
