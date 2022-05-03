import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { Users } from '../types/user';
import { loadUsersError, loadUsersRequest, loadUsersSuccess } from './action';

export const fetchUsersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(loadUsersRequest());
    try {
      const { data } = await api.get<Users>(APIRoute.Users);
      dispatch(loadUsersSuccess(data));
    } catch {
      dispatch(loadUsersError());
    }
  }
);
