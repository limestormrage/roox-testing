import { NameSpace, RootState } from '../root-reducer';

export const getSortType = (state: RootState): string => state[NameSpace.App].sortType;
