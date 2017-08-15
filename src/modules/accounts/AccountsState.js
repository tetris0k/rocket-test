// Initial state

const initialState = {
  accounts: [
    {
      id: 57890456,
      sum: 69650,
      currency: 'RUR',
      percent: 8,
      createdAt: new Date(2017, 0, 23, 13, 55),
      transfers: [
        {
          createdAt: new Date(2017, 2, 8, 19, 21),
          sum: 3500,
          increase: true
        }
      ]
    },
    {
      id: 57890398,
      sum: 3502,
      currency: 'USD',
      percent: 4.5,
      createdAt: new Date(2016, 7, 14, 10, 12),
      transfers: [
        {
          createdAt: new Date(2016, 9, 27, 21, 13),
          sum: 96,
          increase: false
        }
      ]
    },
    {
      id: 57890239,
      sum: 10500,
      currency: 'RUR',
      percent: 8,
      createdAt: new Date(2017, 2, 1, 20, 3),
      transfers: [
        {
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
