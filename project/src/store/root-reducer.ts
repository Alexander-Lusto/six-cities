import { combineReducers } from '@reduxjs/toolkit';
import { mainReducer } from './main/main-reducer';
import { authorizationReducer } from './authorization/authorization-reducer';
import { propertyReducer } from './property/property-reducer';
import { favoritesReducer } from './favorites/favorites-reducer';

export enum NameSpace {
  authorization = 'AUTHORIZATION',
  main = 'MAIN',
  property = 'PROPERTY',
  favorites = 'FAVORITES',
}

export const rootReducer = combineReducers({
  [NameSpace.authorization]: authorizationReducer,
  [NameSpace.main]: mainReducer,
  [NameSpace.property]: propertyReducer,
  [NameSpace.favorites]: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
