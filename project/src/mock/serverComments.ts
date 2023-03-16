import { TServerComment } from '../types/server-comment';

export const mockServerComments: TServerComment[][] = [
  [{
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 5,
    'user': {
      'avatar_url': 'img/1.png',
      'id': 1,
      'is_pro': false,
      'name': 'Max',
    }
  },
  {
    'comment': 'The building is green and from 18th century.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 3,
    'user': {
      'avatar_url': 'img/1.png',
      'id': 2,
      'is_pro': true,
      'name': 'Alice',
    }
  }],
  [{
    'comment': 'Where the bustle of the city comes to rest in this alley flowery and colorful.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 2,
    'rating': 4,
    'user': {
      'avatar_url': 'img/1.png',
      'id': 3,
      'is_pro': false,
      'name': 'Max',
    }
  }, {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 2,
    'rating': 5,
    'user': {
      'avatar_url': 'img/1.png',
      'id': 4,
      'is_pro': true,
      'name': 'Angela',
    }
  }],
];
