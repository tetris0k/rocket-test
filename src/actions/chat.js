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
