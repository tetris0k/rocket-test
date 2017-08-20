// Initial state

const initialState = {
  accounts: [
    {
      id: '57890456',
      sum: 69650,
      currency: 'RUR',
      percent: 8,
      createdAt: new Date(2017, 0, 23, 13, 55),
      transfers: [
        {
          id: 0,
          isPercents: false,
          cardLastChars: '0465',
          createdAt: new Date(2017, 2, 8, 19, 21),
          sum: 3500,
          increase: true
        },
        {
          id: 1,
          isPercents: false,
          cardLastChars: '0465',
          createdAt: new Date(2017, 2, 7, 13, 55),
          sum: 1250,
          increase: true
        },
        {
          id: 2,
          isPercents: false,
          cardLastChars: '0465',
          createdAt: new Date(2017, 2, 5, 19, 16),
          sum: 6800,
          increase: false
        },
        {
          id: 3,
          isPercents: false,
          cardLastChars: '0465',
          createdAt: new Date(2017, 2, 1, 10, 25),
          sum: 10000,
          increase: true
        },
        {
          id: 4,
          isPercents: true,
          cardLastChars: '',
          createdAt: new Date(2017, 1, 20, 18, 10),
          sum: 230,
          increase: true
        },
        {
          id: 5,
          isPercents: false,
          cardLastChars: '0472',
          createdAt: new Date(2017, 1, 20, 18, 9),
          sum: 10000,
          increase: true
        },
        {
          id: 6,
          isPercents: false,
          cardLastChars: '0465',
          createdAt: new Date(2017, 1, 13, 23, 18),
          sum: 5300,
          increase: true
        }
      ]
    },
    {
      id: '57890398',
      sum: 3502,
      currency: 'USD',
      percent: 4.5,
      createdAt: new Date(2016, 7, 14, 10, 12),
      transfers: [
        {
          id: 0,
          isPercents: false,
          cardLastChars: '0019',
          createdAt: new Date(2016, 9, 27, 21, 13),
          sum: 96,
          increase: false
        }
      ]
    },
    {
      id: '57890239',
      sum: 10500,
      currency: 'RUR',
      percent: 8,
      createdAt: new Date(2017, 2, 1, 20, 3),
      transfers: [
        {
          id: 0,
          isPercents: false,
          cardLastChars: '3791',
          createdAt: new Date(2017, 2, 5, 17, 15),
          sum: 500,
          increase: true
        }
      ]
    },
  ]
};

// Reducer

export default function accounts(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
