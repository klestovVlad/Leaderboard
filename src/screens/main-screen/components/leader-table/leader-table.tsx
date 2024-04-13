import React from 'react';
import {FlatList, View} from 'react-native';
import {User} from 'src/store/users/types';
import {useStyleSheet} from '@ui-kitten/components';
import {SORT_DIRECTION} from 'src/shared/constants/sort-options';

import {TableRow} from './table-row/table-row';
import {TableHeader, sortColumnNameType} from './table-header/table-header';
import {themedStyles} from './leader-table.styles';
import {useSortedUsers} from './hooks/useSortedUsers';

interface LeaderTableProps {
  usersArray: User[];
}

export const LeaderTable = ({
  usersArray,
}: LeaderTableProps): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const [sortOptions, setSortOptions] = React.useState<{
    sortColumnName: sortColumnNameType;
    sortDirections: SORT_DIRECTION;
  }>({
    sortColumnName: 'Points',
    sortDirections: SORT_DIRECTION.Ascending,
  });

  const {sortedUsersArray} = useSortedUsers({
    usersArray,
    sortColumnName: sortOptions?.sortColumnName,
    sortDirections: sortOptions?.sortDirections,
  });

  return (
    <View style={styles.root}>
      <TableHeader sortOptions={sortOptions} setSortOptions={setSortOptions} />
      <FlatList
        data={sortedUsersArray}
        keyExtractor={item => item.uid}
        renderItem={({item}) => (
          <TableRow
            name={item.name}
            rank={item.rank}
            stars={item.stars}
            numberOfPoints={item.bananas}
            isHighlighted={item.isHighlighted}
          />
        )}
      />
    </View>
  );
};
