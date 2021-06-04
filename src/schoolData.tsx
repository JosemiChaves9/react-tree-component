export const schoolData = [
  {
    name: 'Class #13259',
    children: [
      {
        name: 'Students',
        children: [
          { name: 'Jacob Nielsen' },
          { name: 'Aaron Felix' },
          { name: 'Maude Brett' },
          {
            name: 'Liyana Turnbull',
            children: [
              {
                name: 'Allergens',
                children: [{ name: 'Fish' }, { name: 'Peanuts' }],
              },
            ],
          },
          { name: 'Faiz Sharpe', rightContent: <p>Exchange student</p> },
          {
            name: 'Juan Reyes',
            rightContent: (
              <p>
                Exchange student from{' '}
                <a href='https://en.wikipedia.org/wiki/Spain'> Spain</a>
              </p>
            ),
          },
        ],
      },
    ],
  },
];
