import React from 'react';
import InputTextView from './InputTextView';
import MessagesContainerView from './MessagesView';
import './styles.css';

const ChatView = () => (
  <div className='chat-root'>
    <InputTextView/>
    <MessagesContainerView/>
  </div>
);

export default ChatView;
