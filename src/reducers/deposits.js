// Initial state

const initialState = {
  deposits: [
    {
      id: 378283892,
      sum: 25135,
      currency: 'RUR',
      percent: 6.5,
      createdAt: new Date(2017, 6, 7, 15, 30),
      term: new Date(2018, 6, 7, 15, 30),
      transfers: [
        {
          id: 6,
          isPercents: true,
          cardLastChars: '',
          createdAt: new Date(2017, 7, 7, 15, 30),
          sum: 135,
          increase: true
        },
        {
          id: 7,
          isPercents: false,
          isInitialDeposit: true,
          cardLastChars: '',
          createdAt: new Date(2017, 6, 7, 15, 30),
          sum: 25000,
          increase: true
        }
      ]
    },
    {
      id: 378283921,
      sum: 1030,
      currency: 'USD',
      percent: 7.2,
      createdAt: new Date(2017, 2, 5, 13, 32),
      term: new Date(2019, 2, 5, 13, 32),
      transfers: [
        {
          id: 1,
          isPercents: true,
          cardLastChars: '',
          createdAt: new Date(2017, 7, 5, 13, 32),
          sum: 6,
          increase: true
        },
        {
          id: 2,
          isPercents: true,
          cardLastChars: '',
          createdAt: new Date(2017, 6, 5, 13, 32),
          sum: 6,
          increase: true
        },
        {
          id: 3,
          isPercents: true,
          cardLastChars: '',
          createdAt: new Date(2017, 5, 5, 13, 32),
          sum: 6,
          increase: true
        },
        {
          id: 4,
          isPercents: true,
          cardLastChars: '',
          createdAt: new Date(2017, 4, 5, 13, 32),
          sum: 6,
          increase: true
        },
        {
          id: 5,
          isPercents: true,
          cardLastChars: '',
          createdAt: new Date(2017, 3, 5, 13, 32),
          sum: 6,
          increase: true
        },
        {
          id: 7,
          isPercents: false,
          isInitialDeposit: true,
          cardLastChars: '',
          createdAt: new Date(2017, 2, 5, 13, 32),
          sum: 1000,
          increase: true
        }
      ]
    },
    {
      id: 378284887,
      sum: 5059,
      currency: 'EUR',
      percent: 7.1,
      createdAt: new Date(2017, 5, 20, 16, 1),
      term: new Date(2020, 5, 20, 16, 1),
      transfers: [
        {
          id: 4,
          isPercents: true,
          cardLastChars: '',
          createdAt: new Date(2017, 7, 20, 16, 1),
          sum: 30,
          increase: true
        },
        {
          id: 5,
          isPercents: true,
          cardLastChars: '',
          createdAt: new Date(2017, 6, 20, 16, 1),
          sum: 29,
          increase: true
        },
        {
          id: 7,
          isPercents: false,
          isInitialDeposit: true,
          cardLastChars: '',
          createdAt: new Date(2017, 5, 20, 16, 1),
          sum: 5000,
          increase: true
        }
      ]
    }
  ]
};

// Reducer

export default function deposits(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
