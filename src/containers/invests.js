import React from 'react';
import { Link } from 'react-router-dom';
import './invests.css';

const InvestsView = () => (
  <div className='invests-root'>
    Investments
    <br/>
    <Link to='/accounts'>To accounts</Link>
  </div>
);

export default InvestsView;
