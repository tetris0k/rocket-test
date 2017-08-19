import React from 'react';
import { Link } from 'react-router-dom';
import './invests.css';

const InvestsView = () => (
  <div className='invests_root'>
    <div className='nav_container'>
      <Link to='/accounts'>
        <button className='nav_button'>
          Счета
        </button>
      </Link>
      <button className='nav_button' style={{ borderRadius: '0 4px 4px 0', backgroundColor: '#52aff1', color: 'white' }}>
        Вклады
      </button>
    </div>
    Investments
    <br/>
    <Link to='/accounts'>To accounts</Link>
  </div>
);

export default InvestsView;
