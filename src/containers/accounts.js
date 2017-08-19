import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import AccountsList from './accounts-list';
import AccountView from './account';

import './accounts.css';

const AccountsView = () => (
  <div className='accounts_root'>
    <div className='nav_container'>
      <button className='nav_button'>
        Счета
      </button>
      <Link to='/investments'>
        <button className='nav_button' style={{ borderRadius: '0 4px 4px 0', backgroundColor: 'white', color: '#52aff1' }}>
          Вклады
        </button>
      </Link>
    </div>
    <div className='list_container'>
      <Switch>
        <Route path='/accounts/:id' component={AccountView}/>
        <Route path='/accounts' component={AccountsList}/>
      </Switch>
    </div>
  </div>
);

export default AccountsView;
