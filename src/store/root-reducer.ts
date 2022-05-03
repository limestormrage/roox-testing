import { combineReducers } from '@reduxjs/toolkit';
import { app } from './app/app';
import { users } from './users/users';

export enum NameSpace {
  Users = 'USERS',
  App = 'APP',
}

export const rootReducer = combineReducers({
  [NameSpace.Users]: users,
  [NameSpace.App]: app,
});

export type RootState = ReturnType<typeof rootReducer>;
