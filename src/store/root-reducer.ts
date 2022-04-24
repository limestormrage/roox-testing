import { combineReducers } from '@reduxjs/toolkit';
import { users } from './users/users';

export enum NameSpace {
  Users = 'USERS',
}

export const rootReducer = combineReducers({
  [NameSpace.Users]: users,
});

export type RootState = ReturnType<typeof rootReducer>;
