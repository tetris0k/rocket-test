import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const InvestsView = () => (
  <div className='invests-root'>
    Investments
    <Link to='/accounts'>To accounts</Link>
  </div>
);

export default InvestsView;
