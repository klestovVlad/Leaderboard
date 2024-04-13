import React from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';
import {TouchableOpacity, View} from 'react-native';
import {SORT_DIRECTION} from 'src/shared/constants/sort-options';

import {themedStyles} from './table-header.styles';
import {getSortIcon} from './heplpers/get-sort-icon';

export type sortColumnNameType = 'Name' | 'Rank' | 'Points';
interface TableHeaderProps {
  sortOptions: {
    sortColumnName: sortColumnNameType;
    sortDirections: SORT_DIRECTION;
  };
  setSortOptions: React.Dispatch<
    React.SetStateAction<{
      sortColumnName: sortColumnNameType;
      sortDirections: SORT_DIRECTION;
    }>
  >;
}

export const TableHeader = ({
  sortOptions,
  setSortOptions,
}: TableHeaderProps) => {
  const styles = useStyleSheet(themedStyles);

  const onColumnNamePress = (columnName: sortColumnNameType) => {
    if (sortOptions?.sortColumnName === columnName) {
      setSortOptions({
        sortColumnName: columnName,
        sortDirections:
          sortOptions.sortDirections === SORT_DIRECTION.Ascending
            ? SORT_DIRECTION.Descending
            : SORT_DIRECTION.Ascending,
      });
    } else {
      setSortOptions({
        sortColumnName: columnName,
        sortDirections: SORT_DIRECTION.Ascending,
      });
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.nameWrapper}>
        <TouchableOpacity
          style={styles.columnNameWrapper}
          onPress={() => onColumnNamePress('Name')}>
          <Text category="s1" appearance="hint">
            Name
          </Text>
          <View style={styles.sortIconWrapper}>
            {sortOptions?.sortColumnName === 'Name' &&
              getSortIcon(sortOptions?.sortDirections)}
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.rank}>
        <TouchableOpacity
          style={styles.columnNameWrapper}
          onPress={() => onColumnNamePress('Rank')}>
          <Text category="s1" appearance="hint">
            Rank
          </Text>
          <View style={styles.sortIconWrapper}>
            {sortOptions?.sortColumnName === 'Rank' &&
              getSortIcon(sortOptions?.sortDirections)}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.points}>
        <TouchableOpacity
          style={styles.columnNameWrapper}
          onPress={() => onColumnNamePress('Points')}>
          <View style={styles.columnNameRightAlign}>
            <Text style={styles.pointsText} category="s1" appearance="hint">
              Points
            </Text>
            <View style={styles.sortIconWrapper}>
              {sortOptions?.sortColumnName === 'Points' &&
                getSortIcon(sortOptions?.sortDirections)}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
