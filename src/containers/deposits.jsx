import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import DepositsList from './deposits-list';
import DepositView from './deposit';

import './right-side-items-page.css';

const DepositsView = () => (
  <div className='right_side_items_page'>
    <div className='nav_container'>
      <Link to='/accounts'>
        <button className='nav_button' style={{ backgroundColor: 'white', color: '#52aff1' }}>
          Счета
        </button>
      </Link>
      <button className='nav_button' style={{ borderRadius: '0 4px 4px 0', backgroundColor: '#52aff1', color: 'white' }}>
        Вклады
      </button>
    </div>
    <div className='list_container'>
      <Switch>
        <Route path='/deposits/:id' component={DepositView}/>
        <Route path='/deposits' component={DepositsList}/>
      </Switch>
    </div>
  </div>
);

export default DepositsView;
