// Initial state

const initialState = {
  messages: [
    {
      id: 1,
      author: 'Марина',
      text: 'Здравствуйте, я ваша тетя!',
      isClient: true,
      createdAt: new Date()
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
  CLIENT_AUTO_ANSWER = 'chat/client/AUTO_ANSWER',
  CLIENT_AUTO_SAY_HELLO = 'chat/client/AUTO_SAY_HELLO';

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

export const clientAutoAnswer = operator_text => ({
  type: CLIENT_AUTO_ANSWER,
  payload: {
    text: `Эй! Смотри, как я могу лего разворачивать твои сообщения: ${operator_text.split('').reverse().join('')}`,
    isClient: true,
    createdAt: new Date()
  }
});

export const clientAutoSayHello = () => ({
  type: CLIENT_AUTO_SAY_HELLO,
  payload: {
    text: 'Привет оператор!',
    createdAt: new Date(),
    isClient: true
  }
});
