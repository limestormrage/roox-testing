import { createSelector } from '@reduxjs/toolkit';
import { User, Users } from '../../types/user';
import { getSortType } from '../app/selectors';
import { NameSpace, RootState } from '../root-reducer';

const sortMap: { [key: string]: (userA: User, userB: User) => number } = {
  Company: (userA: User, userB: User) => userA.company.name.localeCompare(userB.company.name),
  City: (userA: User, userB: User) => userA.address.city.localeCompare(userB.address.city),
};

export const getUsers = (state: RootState): Users => state[NameSpace.Users].users;
export const getUsersLoading = (state: RootState): boolean => state[NameSpace.Users].usersLoading;

export const getSortedUsers = createSelector(
  [getUsers, getSortType],
  (users: Users, sortType: string) => (sortType ? users
    .slice().sort(sortMap[sortType]) : users),
);
