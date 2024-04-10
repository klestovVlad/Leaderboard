import {getBestUsersMatchByName} from 'src/shared/units/get-best-users-match-by-name';
import {Alert} from 'react-native';

import {RootState} from '..';

export const selectAllUsers = (state: RootState) => state.users;

export const selectTopTenUsersByName =
  (name?: string) => (state: RootState) => {
    const {users} = selectAllUsers(state);
    if (!name) {
      return undefined;
    }
    const searchName = name.toLowerCase().trim();

    const sortedUsers = Object.values(users).sort(
      (userA, userB) => userB.bananas - userA.bananas,
    );

    const filteredBySearch = getBestUsersMatchByName(searchName, sortedUsers);

    if (!filteredBySearch.length) {
      Alert.alert('No users found', 'Please try another search query', [
        {text: 'OK'},
      ]);
      return [];
    }

    const topTenUsers = sortedUsers.slice(0, 10).map((user, index) => ({
      ...user,
      rank: index + 1,
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
