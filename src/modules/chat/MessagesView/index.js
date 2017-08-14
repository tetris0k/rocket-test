import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageView from '../MessageView';
import { clientAutoSayHello, clientAutoAnswer } from '../ChatState';
import { addDatesToMessagesArray } from '../../../utils/chatUtils';

import './styles.css';

class MessagesContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      shadowTopOpacity: 0
    };
  }

  componentDidMount() {
    const self = this;
    if (this.refs && this.refs.messagesRoot) {
      this.refs.messagesRoot.addEventListener('scroll', (e) => {
        const shadowTopOpacity = 1 / 20 * Math.min(e.target.scrollTop, 20);
        self.setState({
          shadowTopOpacity
        });
      });
    }
    setTimeout(self.props.clientAutoSayHello, 2000);
  }

  componentDidUpdate() {
    const { messages } = this.props;
    if (messages && messages[0] && !messages[0].isClient) {
      const self = this;
      setTimeout(() => self.props.clientAutoAnswer(messages[0].text), 1000);
    }
  }

  render() {
    const { messages } = this.props;
    console.log(addDatesToMessagesArray(messages));
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
          addDatesToMessagesArray(messages).map((message, index) => (
            message.isDate
              ? <div key={index} className='date'>{`- ${message.day}.${message.month}.${message.year} -`}</div>
              : <MessageView {...message} key={index}/>
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
  }),
  dispatch => bindActionCreators({
    clientAutoSayHello, clientAutoAnswer
  }, dispatch)
)(MessagesContainer);
