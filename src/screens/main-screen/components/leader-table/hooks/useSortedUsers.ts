import {useMemo} from 'react';
import {SORT_DIRECTION} from 'src/shared/constants/sort-options';
import {User} from 'src/store/users/types';

import {sortColumnNameType} from '../table-header/table-header';

interface useSortedUsersProps {
  usersArray: User[];

  sortColumnName: sortColumnNameType;
  sortDirections: SORT_DIRECTION;
}

export const useSortedUsers = ({
  usersArray,
  sortColumnName,
  sortDirections,
}: useSortedUsersProps) => {
  const sortedUsersArray = useMemo(
    () =>
      [...usersArray].sort((a, b) => {
        if (sortDirections === SORT_DIRECTION.Ascending) {
          if (sortColumnName === 'Name') {
            return a.name.localeCompare(b.name);
          } else if (sortColumnName === 'Rank') {
            return (a.rank || 0) - (b.rank || 0);
          } else if (sortColumnName === 'Points') {
            return b.bananas - a.bananas;
          } else {
            return 0;
          }
        } else if (sortDirections === SORT_DIRECTION.Descending) {
          if (sortColumnName === 'Name') {
            return b.name.localeCompare(a.name);
          } else if (sortColumnName === 'Rank') {
            return (b.rank || 0) - (a.rank || 0);
          } else if (sortColumnName === 'Points') {
            return a.bananas - b.bananas;
          } else {
            return 0;
          }
        } else {
          return 0;
        }
      }),
    [usersArray, sortColumnName, sortDirections],
  );

  return {sortedUsersArray};
};
