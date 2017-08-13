import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMessage } from '../ChatState';

import './styles.css';

class InputTextView extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    };
  }

  componentDidMount() {
    if (this.refs && this.refs.input) {
      this.refs.input.addEventListener('keydown', function(e) {
        if (String(e.keyCode) === '13' && e.metaKey) {
          this.form.submit();
        }
      });
    }
  }

  onChangeText = () => this.setState({ inputText: this.refs.input.value });

  onSubmit = () => {
    const { onAddMessage } = this.props;
    const { inputText } = this.state;
    if (inputText.length > 0) {
      onAddMessage(inputText);
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='root'>
          <span className='header'>
            Чат
          </span>
          <div className='input-container'>
            <input
              ref='input'
              type='text'
              className='input-field'
              autoFocus={true}
              placeholder='Сообщение'
              onChange={this.onChangeText}
              value={this.state.inputText}
              onSubmit={this.onSubmit}
            />
          </div>
          <div className='button-container'>
            <input
              type='submit'
              className='button'
              value='Отправить'
            />
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  () => ({}),
  dispatch => bindActionCreators({
    onAddMessage: addMessage
  }, dispatch)
)(InputTextView);
