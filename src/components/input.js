import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

export default class InputTextView extends React.Component {
  static propTypes = {
    onAddMessage: PropTypes.func.isRequired
  };
  constructor() {
    super();
    this.state = {
      inputText: ''
    };
  }

  componentDidMount() {
    if (this.refs && this.refs.input) {
      const self = this;
      this.refs.input.addEventListener('keydown', function(e) {
        if (String(e.keyCode) === '13' && e.metaKey) {
          self.onSubmit();
        }
      });
    }
  }

  onChangeText = () => this.setState({ inputText: this.refs.input.value });

  onSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    const { onAddMessage } = this.props;
    const { inputText } = this.state;
    if (inputText.length > 0) {
      onAddMessage(inputText);
      this.setState({ inputText: '' });
    }
  };

  render() {
    const { shadowHeight } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div
          className='input-text-root'
          style={{
            zIndex: 2,
            'WebkitBoxShadow': `0 ${shadowHeight}px ${shadowHeight}px -6px #888888`,
            'MozBoxShadow': `0 ${shadowHeight}px ${shadowHeight}px -6px #888888`,
            'boxShadow': `0 ${shadowHeight}px ${shadowHeight}px -6px #888888`
          }}
        >
          <span className='header'>
            Чат
          </span>
          <div className='input-container'>
            <textarea
              ref='input'
              className='input-field'
              autoFocus={true}
              placeholder='Сообщение'
              onChange={this.onChangeText}
              value={this.state.inputText}
              rows={6}
              required
            />
          </div>
          <div className='button-container'>
            <button
              className='button'
              onClick={this.onSubmit}
              disabled={this.state.inputText.length === 0}
            >
              Отправить
            </button>
          </div>
        </div>
      </form>
    );
  }
}
