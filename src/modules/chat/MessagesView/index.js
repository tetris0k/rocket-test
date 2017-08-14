import React from 'react';
import { connect } from 'react-redux';
import MessageView from '../MessageView';

import './styles.css';

class MessagesContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      shadowTopOpacity: 0
    };
  }

  componentDidMount() {
    if (this.refs && this.refs.messagesRoot) {
      const self = this;
      this.refs.messagesRoot.addEventListener('scroll', (e) => {
        const shadowTopOpacity = 1 / 20 * Math.min(e.target.scrollTop, 20);
        self.setState({
          shadowTopOpacity
        });
      });
    }
  }

  render() {
    const { messages } = this.props;
    const { shadowTopOpacity } = this.state;
    const shadowTopStyle = {
      opacity: shadowTopOpacity,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 10,
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)'
    };
    return (
      <div className='outer-root'>
        <div style={shadowTopStyle}/>
        <div className='messages-root' ref='messagesRoot'>
          {messages && messages.length > 0 &&
            messages.map((message, index) => (
              <MessageView {...message} key={index}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.chat
  })
)(MessagesContainer);
