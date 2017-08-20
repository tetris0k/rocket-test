import {
  ADD_MESSAGE, CLIENT_ADD_MESSAGE, SEND_TRANSACTION
} from '../actions/chat';

// Initial state

const initialState = {
  messages: [
    {
      id: 0,
      text: 'Здравствуйте, я ваша тетя!',
      isClient: true,
      createdAt: new Date(1, 1, 2017)
    }
  ],
  user: {
    name: 'Мария',
  },
  client: {
    name: 'Евгений'
  }
};

// Reducer

export default function chat(state = initialState, action) {
  switch (action.type) {
  case SEND_TRANSACTION:
    return {
      ...state,
      messages: [
        {
          id: state.messages.length,
          isTransaction: true,
          isClient: false,
          ...action.payload
        },
        ...state.messages
      ]
    };
  case ADD_MESSAGE:
    return {
      ...state,
      messages: [
        {
          ...action.payload,
          id: state.messages.length
        },
        ...state.messages
      ]
    };
  case CLIENT_ADD_MESSAGE:
    return {
      ...state,
      messages: ((state.messages[0].isClient && state.messages.length > 1) || state.messages[0].isTransaction)
        ? state.messages
        : [
          {
            ...action.payload,
            id: state.messages.length
          },
          ...state.messages
        ]
    };
  default:
    return state;
  }
}
