import React, { Component } from 'react';
import ChatView from './modules/chat';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ChatView/>
      </div>
    );
  }
}

export default App;
