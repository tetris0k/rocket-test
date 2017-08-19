import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../actions/chat';
import InputTextView from '../components/input.js';
import MessagesContainerView from './messages.js';

import './chat.css';

const ChatView = ({ addMessage }) => (
  <div className='chat-root'>
    <InputTextView onAddMessage={addMessage}/>
    <MessagesContainerView/>
  </div>
);

export default connect(
  () => ({}),
  dispatch => bindActionCreators({ addMessage }, dispatch)
)(ChatView);
