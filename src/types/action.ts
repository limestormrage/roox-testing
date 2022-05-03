import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { RootState } from '../store/root-reducer';

export enum ActionType {
  LoadUsersRequest = 'data/loadUsersRequest',
  LoadUsersSuccess = 'data/loadUsersSuccess',
  LoadUsersError = 'data/loadUsersError',
  ChangeSortType = 'user/changeSortType',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>;
