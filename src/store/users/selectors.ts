import { Users } from '../../types/user';
import { NameSpace, RootState } from '../root-reducer';

export const getUsers = (state: RootState): Users => state[NameSpace.Users].users;
export const getUsersLoading = (state: RootState): boolean => state[NameSpace.Users].usersLoading;
