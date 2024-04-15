import {getBestUsersMatchByName} from 'src/shared/units/get-best-users-match-by-name';
import {Alert} from 'react-native';
import {SORT_DIRECTION} from 'src/shared/constants/sort-options';

import {RootState} from '..';

export const selectAllUsers = (state: RootState) => state.users;

export const selectTopTenUsersByName =
  (name?: string, sortDirections?: SORT_DIRECTION) => (state: RootState) => {
    const {users} = selectAllUsers(state);
    if (!name) {
      return [];
    }
    if (!Object.keys(users).length) {
      return [];
    }
    const isAscending = sortDirections === SORT_DIRECTION.Ascending;
    const searchName = name.toLowerCase().trim();

    const sortedUsers = Object.values(users).sort((userA, userB) => {
      if (userA.bananas !== userB.bananas) {
        return isAscending
          ? userB.bananas - userA.bananas
          : userA.bananas - userB.bananas;
      } else {
        return isAscending
          ? userA.name.localeCompare(userB.name)
          : userB.name.localeCompare(userA.name);
      }
    });

    const filteredBySearch = getBestUsersMatchByName(
      searchName,
      sortedUsers,
      isAscending,
    );

    if (!filteredBySearch.length) {
      Alert.alert(
        'This user name does not exist!',
        'Please specify an existing user name!',
        [{text: 'OK'}],
      );
      return [];
    }

    const topTenUsers = sortedUsers.slice(0, 10).map((user, index) => ({
      ...user,
      rank: isAscending ? index + 1 : sortedUsers.length - index,
    }));

    const topTenUsersWithoutSearchUsers = topTenUsers.filter(user => {
      const isUserInSearch = filteredBySearch.find(
        searchUser => searchUser.uid === user.uid,
      );

      return !isUserInSearch;
    });

    const searchLength = filteredBySearch.length;

    const usersForShow = [
      ...topTenUsersWithoutSearchUsers.slice(0, 10 - searchLength),
      ...filteredBySearch,
    ].sort((a, b) => b.bananas - a.bananas);

    return usersForShow;
  };

export const selectUsersLoadingState = (state: RootState) => ({
  loading: state.users.loading,
  error: state.users.error,
});

export default {
  selectAllUsers,
};
