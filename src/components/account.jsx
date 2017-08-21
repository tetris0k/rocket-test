import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCurrencySign, getDateString, addBlanksToSum } from '../utils/accounts';
import MaximizeIcon from '../maximize.icon';
import CloseIcon from '../close.icon';

import './account.css';

export default class Account extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    createdAt: PropTypes.object.isRequired,
    lastTransfer: PropTypes.shape({
      id: PropTypes.number,
      isPercents: PropTypes.bool,
      cardLastChars: PropTypes.string,
      createdAt: PropTypes.object,
      sum: PropTypes.number,
      increase: PropTypes.bool
    }),
    isDark: PropTypes.bool,
    opened: PropTypes.bool,
    linkTo: PropTypes.string
  };
  render() {
    const { id, sum, currency, percent, createdAt, lastTransfer, opened, linkTo, isDark } = this.props;
    const curSign = getCurrencySign(currency);
    return (
      <div
        className='account'
        style={isDark
          ? { backgroundColor: '#f9f9f9', borderTop: '1px solid #eeeeee', borderBottom: '1px solid #eeeeee' }
          : {}
        }
      >
        <div className='id'>Счет № {id}</div>
        <div className='sum'>{addBlanksToSum(sum)} {curSign}</div>
        <div className='percent'>{percent}% годовых</div>
        <div className='date_string'>Создан: {getDateString(createdAt)}</div>
        {lastTransfer &&
          <div className='transaction'>
            Последняя операция: {getDateString(lastTransfer.createdAt)} (<span style={{ color: lastTransfer.increase ? '#6ece1a' : '#de1c28' }}>
              {lastTransfer.increase ? '+' : '-'} {addBlanksToSum(lastTransfer.sum)} {curSign}
            </span>)
          </div>
        }
        <Link to={linkTo || `/accounts/${id}`} className='link_right'>
          {opened
            ? <CloseIcon className='icon_right'/>
            : <MaximizeIcon className='icon_right'/>
          }
        </Link>
      </div>
    );
  }
}
