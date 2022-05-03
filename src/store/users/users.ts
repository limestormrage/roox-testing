import { createReducer } from '@reduxjs/toolkit';
import { UsersState } from '../../types/state';
import { loadUsersError, loadUsersRequest, loadUsersSuccess } from '../action';

const initialState: UsersState = {
  usersLoading: false,
  usersError: false,
  users: [],
};

export const users = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUsersRequest, (state) => {
      state.usersLoading = true;
    })
    .addCase(loadUsersSuccess, (state, action) => {
      const { receivedUsers } = action.payload;
      state.usersLoading = false;
      state.users = receivedUsers;
    })
    .addCase(loadUsersError, (state) => {
      state.usersError = true;
    });
});
