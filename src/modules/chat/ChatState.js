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

// Actions

export const ADD_MESSAGE = 'chat/ADD_MESSAGE',
  CLIENT_ADD_MESSAGE = 'chat/client/ADD_MESSAGE',
  SEND_TRANSACTION = 'chat/transactions/SEND';

// Action creators

export const addMessage = text => ({
  type: ADD_MESSAGE,
  payload: {
    text,
    isClient: false,
    createdAt: new Date()
  }
});

export const clientAddMessage = text => ({
  type: CLIENT_ADD_MESSAGE,
  payload: {
    text,
    isClient: true,
    createdAt: new Date()
  }
});

export const sendTransaction = transaction => ({
  type: SEND_TRANSACTION,
  payload: {
    transaction,
    createdAt: new Date()
  }
});

export const clientAutoAnswer = operator_text => ({
  type: CLIENT_ADD_MESSAGE,
  payload: {
    text: `Эй! Смотри, как я могу легко разворачивать твои сообщения: ${operator_text.split('').reverse().join('')}`,
    isClient: true,
    createdAt: new Date()
  }
});

export const clientAutoSayHello = () => ({
  type: CLIENT_ADD_MESSAGE,
  payload: {
    text: 'Привет оператор!',
    createdAt: new Date(),
    isClient: true
  }
});

// Reducer

export default function chat(state = initialState, action) {
  switch (action.type) {
    case SEND_TRANSACTION:
      return {
        ...state,
        messages: [
          {
            isTransaction: true,
            isClient: false,
            ...action.payload
          }
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
        messages: [
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
