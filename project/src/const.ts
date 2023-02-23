export enum Path {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '*',
}

const Month = {
  January : 'January',
  February : 'February',
  March : 'March',
  April : 'April',
  May : 'May',
  June : 'June',
  July : 'July',
  August : 'August',
  September : 'September',
  October : 'October',
  December : 'December',
};

export const cities = [{
  name: 'Amsterdam',
  lat: 52.377956,
  lng: 4.897070,
  zoom: 12,
}, {
  name: 'Cologne',
  lat: 50.935173,
  lng: 6.953101,
  zoom: 13,
}];

export const months: string[] = Object.values(Month);
export const locations: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
