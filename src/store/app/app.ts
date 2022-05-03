import { createReducer } from '@reduxjs/toolkit';
import { AppState } from '../../types/state';
import { changeSortType } from '../action';

const initialState: AppState = {
  sortType: '',
};

export const app = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortType, (state, action) => {
      const { currentSortType } = action.payload;
      state.sortType = currentSortType;
    });
});
