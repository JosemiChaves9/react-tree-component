export const data = [
  {
    name: 'Ferrari',
    rightContent: (
      <img
        src='https://i.pinimg.com/originals/b1/fc/a2/b1fca29b382abdb7a3fa0eb69aec0a58.png'
        alt='Logo Ferrari'
      />
    ),
    children: [
      {
        name: '812',
        children: [
          {
            name: 'Versions',
            children: [
              { name: '812 Superfast', rightContent: <p>Yeess</p> },
              { name: '812 GTS' },
              { name: '812 Competizione' },
              { name: '812 Competizione A' },
            ],
          },
        ],
      },
      {
        name: 'SF90',
        children: [
          {
            name: 'Versions',
            children: [{ name: 'SF90 Stradale' }, { name: 'SF90 Spider' }],
          },
        ],
      },
      {
        name: 'F8',
        children: [
          {
            name: 'Versions',
            children: [{ name: 'F8 Tributo' }, { name: 'F8 Spider' }],
          },
        ],
      },
      { name: 'Roma' },
      { name: 'Portofino M' },
      {
        name: 'Icona',
        rightContent: <p>Not for public selling</p>,
        children: [
          {
            name: 'Versions',
            children: [{ name: 'Monza SP1' }, { name: 'Monza SP2' }],
          },
        ],
      },
    ],
  },
  {
    name: 'Lamborghini',
    rightContent: (
      <img
        src='http://assets.stickpng.com/images/580b585b2edbce24c47b2c89.png'
        alt='Logo Lamborghini'
      />
    ),
    children: [
      {
        name: 'Aventador',
        children: [
          {
            name: 'Versions',
            children: [
              { name: 'Aventador S' },
              { name: 'Aventador S Roadster' },
              { name: 'Aventador SVJ' },
              { name: 'Aventador SVJ Roadster' },
            ],
          },
        ],
      },
      {
        name: 'Huracan',
        children: [
          {
            name: 'Versions',
            children: [
              { name: 'Huracan Evo' },
              { name: 'Huracan Evo Spyder' },
              { name: 'Huracan Performante' },
              { name: 'Huracan Performante Spyder' },
              { name: 'Huracan STO' },
            ],
          },
        ],
      },
      {
        name: 'Urus',
        versions: [
          {
            children: [{ name: 'Urus' }, { name: 'Urus Evo' }],
          },
        ],
      },
      {
        name: 'Sian',
        rightContent: <p>Expected appearing in 2023</p>,
        versions: [
          {
            children: [{ name: 'Sian' }, { name: 'Sian Roadster' }],
          },
        ],
      },
    ],
  },
  {
    name: 'McLaren',
    rightContent: (
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/04/McLaren-logo-2002-2560x1440.png'
        alt='Logo McLaren'
      />
    ),
    children: [
      {
        name: '570',
        children: [
          {
            name: 'Versions',
            children: [
              { name: '570 GT' },
              { name: '570S Coupe' },
              { name: '570S Spider' },
            ],
          },
        ],
      },
      {
        name: '600',
        children: [
          {
            name: 'Versions',
            children: [{ name: '600 LT' }, { name: '600 LT Spider' }],
          },
        ],
      },
      { name: '620R' },
      {
        name: '720',
        children: [
          {
            name: 'Versions',
            children: [{ name: '720S' }, { name: '720S Spider' }],
          },
        ],
      },
      { name: '765 LT' },
      { name: 'Artura' },
      { name: 'Elva' },
      { name: 'GT' },
      {
        name: 'Sabre',
        rightContent: <div>The price of this car will be: $4 980 000</div>,
      },
      { name: 'Senna' },
      { name: 'Speedtail' },
    ],
  },
];
