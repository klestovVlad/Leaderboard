import {Spinner, Text, useStyleSheet} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectors, useAppDispatch} from 'src/store';
import {fetchUsers} from 'src/store/users/api';
import {View} from 'react-native';
import {SORT_DIRECTION} from 'src/shared/constants/sort-options';

import {SearchRow} from '../search-row/search-row';
import {LeaderTable} from '../leader-table/leader-table';
import {themedStyles} from './leaderboard.styles';

export const Leaderboard = () => {
  const styles = useStyleSheet(themedStyles);
  const [search, setSearch] = useState('');
  const [searchDirection, setSearchDirection] = useState<SORT_DIRECTION>(
    SORT_DIRECTION.Ascending,
  );
  const {loading, error} = useSelector(selectors.users.selectUsersLoadingState);
  const dispatch = useAppDispatch();

  const users = useSelector(
    selectors.users.selectTopTenUsersByName(search, searchDirection),
  );

  const hasUsers = users && users.length > 0;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) {
    return <Text status="danger">Loading error: {error}</Text>;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <View style={styles.root}>
      <SearchRow
        setSearch={setSearch}
        searchDirection={searchDirection}
        setSearchDirection={setSearchDirection}
      />
      {hasUsers && <LeaderTable usersArray={users} />}
    </View>
  );
};
