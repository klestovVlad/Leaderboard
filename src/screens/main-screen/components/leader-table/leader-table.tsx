import React from 'react';
import {FlatList, View} from 'react-native';
import {User} from 'src/store/users/types';
import {useStyleSheet} from '@ui-kitten/components';

import {TableRow} from './table-row/table-row';
import {TableHeader} from './table-header/table-header';
import {themedStyles} from './leader-table.styles';

interface LeaderTableProps {
  usersArray: User[];
}

export const LeaderTable = ({
  usersArray,
}: LeaderTableProps): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.root}>
      <TableHeader />
      <FlatList
        data={usersArray}
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
