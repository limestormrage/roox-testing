import { Users } from './user';

export type UsersState = {
  usersLoading: boolean,
  usersError: boolean,
  users: Users,
};

export type AppState = {
  sortType: string
};
