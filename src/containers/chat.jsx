import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../actions/chat';
import InputTextView from '../components/input.jsx';
import MessagesContainerView from './messages.jsx';

import './chat.css';

class ChatView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      shadowHeight: 0
    };
  }

  setShadow = (shadow) => {
    this.setState({ shadowHeight: shadow });
  };

  render() {
    return (
      <div className='chat-root'>
        <InputTextView onAddMessage={this.props.addMessage} shadowHeight={this.state.shadowHeight}/>
        <MessagesContainerView setShadow={this.setShadow}/>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  dispatch => bindActionCreators({ addMessage }, dispatch)
)(ChatView);
