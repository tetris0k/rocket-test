import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageView from '../components/message.jsx';
import { clientAutoSayHello, clientAutoAnswer, addMessage } from '../actions/chat';
import { addDatesToMessagesArray } from '../utils/chat';
import Transaction from '../components/transaction';

import './messages.css';

class MessagesContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isTiming: false
    };
  }

  componentDidMount() {
    if (this.refs && this.refs.messagesRoot) {
      this.refs.messagesRoot.addEventListener('scroll', (e) => {
        this.props.setShadow(Math.min(e.target.scrollTop, 10));
      });
    }
    setTimeout(this.props.clientAutoSayHello, 2000);
  }

  componentWillUpdate(nextProps, nextState) {
    const { messages } = nextProps;
    if (messages && messages[0] && !messages[0].isClient && !messages[0].isTransaction && !nextState.isTiming) {
      this.setState({ isTiming: true });
      // console.log('set timeout from componentWillUpdate');
      setTimeout(() => {
        this.props.clientAutoAnswer(messages[0].text);
        this.setState({ isTiming: false });
      }, 1000);
    }
  }

  renderMessage = (message, key, user, client) => {
    if (message.isDate) {
      return <div key={String(key)} className='date'>{`- ${message.day}.${message.month}.${message.year} -`}</div>;
    } else if (message.isTransaction) {
      return <MessageView
        key={String(key)}
        user={user}
        client={client}
        {...message}
        doNotShowAuthor
        text={[<span key={0} className='transaction_title_string'>Операция</span>, <Transaction {...message.transaction} key={1}/>]}
      />;
    }

    return <MessageView {...message} key={String(key)} user={user} client={client} />;
  };

  render() {
    const { messages, user, client } = this.props;
    return (
      <div className='outer-root'>
        <div className='messages-root' ref='messagesRoot'>
          {messages &&
          addDatesToMessagesArray(messages).map(message =>
            this.renderMessage(message, message.id, user, client))
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
    clientAutoSayHello, clientAutoAnswer, addMessage
  }, dispatch)
)(MessagesContainer);
