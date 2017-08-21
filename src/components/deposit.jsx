import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCurrencySign, getDateString, addBlanksToSum } from '../utils/accounts';
import MaximizeIcon from '../maximize.icon';
import CloseIcon from '../close.icon';

import './deposit.css';

export default class Deposit extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    sum: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    createdAt: PropTypes.object.isRequired,
    term: PropTypes.object.isRequired,
    transfers: PropTypes.array.isRequired,
    opened: PropTypes.bool,
    isDark: PropTypes.bool
  };
  render() {
    const { id, sum, currency, percent, createdAt, term, isDark, opened, transfers } = this.props;
    const curSign = getCurrencySign(currency);
    const nowDiff = Math.floor(((new Date()) - createdAt) / 2.628e9);
    const termDiff = Math.floor((term - createdAt) / 2.628e9); // amount of ms in month
    const nowDiffString = nowDiff > 0 ? ` (${nowDiff} мес. назад)` : '';
    const termDiffString = termDiff > 0 ? ` (на ${termDiff} мес.)` : '';
    const profit = sum - transfers[transfers.length - 1].sum;
    return (
      <div
        className='deposit'
        style={isDark
          ? { backgroundColor: '#f9f9f9', borderTop: '1px solid #eeeeee', borderBottom: '1px solid #eeeeee' }
          : {}
        }
      >
        <div className='id'>Вклад № {id}</div>
        <div className='sum'>{addBlanksToSum(sum)} {curSign}</div>
        <div className='percent'>{percent}% годовых</div>
        <div className='date_string'>Открыт: {getDateString(createdAt, true)}{nowDiffString}</div>
        <div className='date_string'>Срок вклада: до {getDateString(term, true)}{termDiffString}</div>
        {!opened &&
          <div className='transaction'>
            Получено процентами: <span style={{ color: '#6ece1a' }}>+ {addBlanksToSum(profit)} {curSign}</span>
          </div>
        }
        <Link to={opened ? '/deposits' : `/deposits/${id}`} className='link_right'>
          {opened
            ? <CloseIcon className='icon_right'/>
            : <MaximizeIcon className='icon_right'/>
          }
        </Link>
      </div>
    );
  }
}
