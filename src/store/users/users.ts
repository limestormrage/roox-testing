import { createReducer } from '@reduxjs/toolkit';
import { UsersState } from '../../types/state';

const initialState: UsersState = {
  usersLoading: false,
  usersError: false,
  users: [],
};

const users = createReducer(initialState, (builder) => {
//   builder;
  // .addCase(ld);
});

export { users };
