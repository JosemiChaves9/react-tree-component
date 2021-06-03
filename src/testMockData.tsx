export const data = [
  {
    name: 'Parent 1',
    children: [{ name: 'Children 1-1' }, { name: 'Children 1-2' }],
  },
  {
    name: 'Parent 2',
    children: [
      { name: 'Children 2-1' },
      { name: 'Children 2-2', children: [{ name: 'Children 2-2-1' }] },
    ],
  },
  {
    name: 'Parent 3',
    children: [
      {
        name: 'Children 3-1',
        rightContent: "I'm the children of Children 3-1",
      },
    ],
  },
];
