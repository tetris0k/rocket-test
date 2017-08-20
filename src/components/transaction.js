import React from 'react';
import PropTypes from 'prop-types';
import { getDateString, getCurrencySign, addBlanksToSum } from '../utils/accounts';
import ShareIcon from '../mingle-share.icon';

import './transaction.css';

export default class Transaction extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    isPercents: PropTypes.bool.isRequired,
    cardLastChars: PropTypes.string.isRequired,
    createdAt: PropTypes.object.isRequired,
    sum: PropTypes.number.isRequired,
    increase: PropTypes.bool.isRequired,
    currency: PropTypes.string.isRequired,
    isDark: PropTypes.bool,
    onPress: PropTypes.func
  };

  render() {
    const { isPercents, cardLastChars, createdAt, sum, increase, currency, isDark, onPress } = this.props;
    let secondLine = '';
    const sumSpan = <span style={{ color: increase ? '#6ece1a' : '#de1c28' }}>
      {increase ? '+' : '-'} {addBlanksToSum(sum)} {getCurrencySign(currency)}
    </span>;
    if (isPercents) {
      secondLine = <div className='body_string'>
        Начисление процентов {sumSpan}
      </div>;
    } else {
      secondLine = <div className='body_string'>
        {increase ? 'Пополнение с карты ' : 'Списание на карту '} **** {cardLastChars}  {sumSpan}
      </div>;
    }
    return (
      <div
        className='transaction'
        style={isDark
          ? {
            backgroundColor: '#f9f9f9',
            borderTop: '1px solid #eeeeee',
            borderBottom: '1px solid #eeeeee',
            paddingLeft: onPress ? 30 : 0,        // for transactions in messages
            paddingRight: onPress ? 30 : 0
          }
          : {
            paddingLeft: onPress ? 30 : 0,        // for transactions in messages
            paddingRight: onPress ? 30 : 0
          }
        }
      >
        <div className='date_string'>{getDateString(createdAt)}</div>
        {secondLine}
        {onPress &&
        <button onClick={this.onClick} className='share_button'><ShareIcon/></button>
        }
      </div>
    );
  }

  onClick = () => {
    const { isDark, onPress, ...rest } = this.props;
    onPress(rest);
  }
}
