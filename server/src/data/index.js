const DESTINATIONS = [
  {
    id: '1',
    name: 'Bukit Raya',
    country: 'Indonesia',
    city: 'Bali',
    description: 'Mount Bukit Raya is one of the mountains in a series of 7 highest mountains in Indonesia 7 summits of Indonesia, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    star: 4.8,
    price: 40,
    destination: 20.8,
    location: {
      city: 'Bali',
      country: 'Indonesia',
    },
  },
  {
    id: '2',
    name: 'Gunung Agung',
    description: 'Gunung Agung is one of the mountains in a series of 7 highest mountains in Indonesia 7 summits of Indonesia, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    country: 'Indonesia',
    city: 'Bali',
    star: 4.7,
    price: 49,
    destination: 13.4,
    location: {
      city: 'Jakarta',
      country: 'Indonesia',
    },
  },
  {
    id: '3',
    name: 'Fandoglu',
    description: 'Fandoglu is one of the jungles in a series of 7 highest mountains in Iran 7 summits of Indonesia, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    country: 'Indonesia',
    city: 'Bali',
    star: 4.2,
    price: 29.9,
    destination: 32.1,
    location: {
      city: 'Ardabil',
      country: 'Iran',
    },
  },
  {
    id: '4',
    name: 'Bandar Ab`bas',
    description: 'Bandar Ab`bas, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    country: 'Indonesia',
    city: 'Bali',
    star: 4.9,
    price: 39.9,
    destination: 120.2,
    location: {
      city: 'Bandar Ab`bas',
      country: 'Iran',
    },
  },
  {
    id: '5',
    name: 'Banff',
    description: 'Banff, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    country: 'Indonesia',
    city: 'Bali',
    star: 4.1,
    price: 34.9,
    destination: 23.2,
    location: {
      city: 'Alberta',
      country: 'Canada',
    },
  },
  {
    id: '6',
    name: 'Hocking Hills',
    description: 'Hocking Hills, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    country: 'Indonesia',
    city: 'Bali',
    star: 4.9,
    price: 39.9,
    destination: 90.5,
    location: {
      city: 'Ohio',
      country: 'USA',
    },
  },
  {
    id: '7',
    name: 'Key West',
    description: 'Key West, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    country: 'Indonesia',
    city: 'Bali',
    star: 4.9,
    price: 28.9,
    destination: 102.9,
    location: {
      city: 'Florida',
      country: 'USA',
    },
  },
  {
    id: '8',
    name: 'Cape Cod',
    description: 'Cape Cod, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    country: 'Indonesia',
    city: 'Bali',
    star: 4.7,
    price: 51.9,
    destination: 120.9,
    location: {
      city: 'Massachusetts',
      country: 'USA',
    },
  },
  {
    id: '9',
    name: 'Lake Garda',
    description: 'Lake Garda, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    country: 'Indonesia',
    city: 'Bali',
    star: 4.2,
    price: 39.9,
    destination: 78.2,
    location: {
      city: 'Lake Garda',
      country: 'Italy',
    },
  },
];

const DISCOUNTS = [
  {
    id: 1,
    code: 'b4Kn2LOB',
    active: true,
    discount: 12,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-12-02 13:35:00',
  }, {
    id: 2,
    code: 'Sj6xdXet',
    active: true,
    discount: 17,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-11-23 16:35:00',
  }, {
    id: 3,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 4,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  },
  {
    id: 5,
    code: 'b4Kn2LOB',
    active: true,
    discount: 12,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-12-02 13:35:00',
  }, {
    id: 6,
    code: 'Sj6xdXet',
    active: true,
    discount: 17,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-11-23 16:35:00',
  }, {
    id: 7,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 8,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  }, {
    id: 9,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 10,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  },
  {
    id: 11,
    code: 'b4Kn2LOB',
    active: true,
    discount: 12,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-12-02 13:35:00',
  }, {
    id: 12,
    code: 'Sj6xdXet',
    active: true,
    discount: 17,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-11-23 16:35:00',
  }, {
    id: 13,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 14,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  },
  {
    id: 15,
    code: 'b4Kn2LOB',
    active: true,
    discount: 12,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-12-02 13:35:00',
  }, {
    id: 16,
    code: 'Sj6xdXet',
    active: true,
    discount: 17,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-11-23 16:35:00',
  }, {
    id: 17,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 18,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  }, {
    id: 19,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 20,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  },

  {
    id: 31,
    code: 'b4Kn2LOB',
    active: true,
    discount: 12,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-12-02 13:35:00',
  }, {
    id: 32,
    code: 'Sj6xdXet',
    active: true,
    discount: 17,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-11-23 16:35:00',
  }, {
    id: 33,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 34,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  },
  {
    id: 35,
    code: 'b4Kn2LOB',
    active: true,
    discount: 12,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-12-02 13:35:00',
  }, {
    id: 36,
    code: 'Sj6xdXet',
    active: true,
    discount: 17,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-11-23 16:35:00',
  }, {
    id: 37,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 38,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  }, {
    id: 39,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 40,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  },

  {
    id: 41,
    code: 'b4Kn2LOB',
    active: true,
    discount: 12,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-12-02 13:35:00',
  }, {
    id: 42,
    code: 'Sj6xdXet',
    active: true,
    discount: 17,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-11-23 16:35:00',
  }, {
    id: 43,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 44,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  },
  {
    id: 45,
    code: 'b4Kn2LOB',
    active: true,
    discount: 12,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-12-02 13:35:00',
  }, {
    id: 46,
    code: 'Sj6xdXet',
    active: true,
    discount: 17,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-11-23 16:35:00',
  }, {
    id: 47,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 48,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  }, {
    id: 49,
    code: '1KoKCayE',
    active: true,
    discount: 8,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-09-11 20:35:00',
  }, {
    id: 50,
    code: '2znq4OZH',
    active: true,
    discount: 3,
    locationTitle: 'Bukit Raya',
    validUntil: '2022-07-19 10:27:00',
  },
];

const NOTIFICATIONS = [{
  id: 1,
  title: 'Destination booked!',
  time: '2h ago',
  userId: 1,
}, {
  id: 2,
  title: 'Money will return in 24h!',
  time: '2 days ago',
  userId: 1,
}];

const USER_ADMIN = {
  id: 1, name: 'Mahsa Mesbah', username: 'mesbah68', passwordHash: '$2a$10$V.9xB1vLT6zpnMihcPdF2u6T9LtLSpWWomxIq.qBkFSSf/c5qOKR6',
};

const otherUsers = [
  {
    id: 2, name: 'Jafar Rezaei', username: 'sayjeyhi', passwordHash: '$2a$10$V.9xB1vLT6zpnMihcPdF2u6T9LtLSpWWomxIq.qBkFSSf/c5qOKR6',
  },
];

module.exports = {
  NOTIFICATIONS,
  DESTINATIONS,
  DISCOUNTS,
  USER_ADMIN,
  users: [USER_ADMIN, ...otherUsers],
  // eslint-disable-next-line global-require
  config: require('./config'),
};
