export enum Path {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '*',
}

export const SortType = {
  POPULAR: 'popular',
  PRICE_LOW: 'price-low',
  PRICE_HIGH: 'price-high',
  TOP_RATED: 'top-rated',
};

const Month = {
  January: 'January',
  February: 'February',
  March: 'March',
  April: 'April',
  May: 'May',
  June: 'June',
  July: 'July',
  August: 'August',
  September: 'September',
  October: 'October',
  December: 'December',
};

export const months: string[] = Object.values(Month);

export const cities = [{
  id: 0,
  name: 'Paris',
  lat: 48.864716,
  lng: 2.349014,
  zoom: 13,
}, {
  id: 1,
  name: 'Cologne',
  lat: 50.935173,
  lng: 6.953101,
  zoom: 13,
}, {
  id: 2,
  name: 'Brussels',
  lat: 50.8505,
  lng: 4.3488,
  zoom: 13,
}, {
  id: 3,
  name: 'Amsterdam',
  lat: 52.377956,
  lng: 4.897070,
  zoom: 12,
}, {
  id: 4,
  name: 'Hamburg',
  lat: 53.551086,
  lng: 9.993682,
  zoom: 13,
}, {
  id: 5,
  name: 'Dusseldorf',
  lat: 51.233334,
  lng: 6.783333,
  zoom: 13,
}];

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
