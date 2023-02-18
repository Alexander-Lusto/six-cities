export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
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

export const months: string[] = Object.values(Month);

export const locations: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
