import { combineReducers } from '@reduxjs/toolkit';
import { mainData } from './main-data/main-data';
import { authorizationProcess } from './authorization-process/authorization-process';
import { propertyData } from './property-data/property-data';

export enum NameSpace {
  authorization = 'AUTHORIZATION',
  main = 'MAIN',
  property = 'PROPERTY',
}

export const rootReducer = combineReducers({
  [NameSpace.authorization]: authorizationProcess,
  [NameSpace.main]: mainData,
  [NameSpace.property]: propertyData,
});

export type RootState = ReturnType<typeof rootReducer>;
