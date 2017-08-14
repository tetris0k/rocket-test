import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userAvatar from '../../../user.jpg';
import clientAvatar from '../../../client.jpg';

import './styles.css';

class MessageView extends React.PureComponent {
  render() {
    const { text, isClient, user, client } = this.props;
    const name = isClient ? client.name : user.name;
    return (
      <div className='message-container' style={{ justifyContent: isClient ? 'flex-start' : 'flex-end' }}>
        {isClient &&
          <img alt='Oops' src={clientAvatar} width={40} height={40} className='avatar left' />
        }
        <div className='white-box'>
          <span className='author-name'>{`${name}:`}</span>
          {text}
        </div>
        {!isClient &&
          <img alt='Oops' src={userAvatar} width={40} height={40} className='avatar right' />
        }
      </div>
    );
  }
}

MessageView.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.any.isRequired,
  isClient: PropTypes.bool.isRequired
};

export default connect(
  state => ({
    user: state.chat.user,
    client: state.chat.client
  })
)(MessageView);
