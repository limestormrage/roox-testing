import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Users } from '../types/user';

export const loadUsersRequest = createAction(ActionType.LoadUsersRequest);

export const loadUsersSuccess = createAction(
  ActionType.LoadUsersSuccess,
  (receivedUsers: Users) => ({
    payload: {
      receivedUsers,
    },
  }),
);

export const loadUsersError = createAction(ActionType.LoadUsersError);

export const changeSortType = createAction(
  ActionType.ChangeSortType,
  (currentSortType: string) => ({
    payload: {
      currentSortType,
    },
  }),
);
