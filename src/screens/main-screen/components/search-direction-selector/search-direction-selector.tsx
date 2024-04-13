import React from 'react';
import {Radio, useStyleSheet} from '@ui-kitten/components';
import {View} from 'react-native';
import {SORT_DIRECTION} from 'src/shared/constants/sort-options';

import {themedStyles} from './search-direction-selector.styles';

interface SearchDirectionSelectorProps {
  searchDirection: SORT_DIRECTION;
  setSearchDirection: (value: SORT_DIRECTION) => void;
}

export const SearchDirectionSelector = ({
  searchDirection,
  setSearchDirection,
}: SearchDirectionSelectorProps) => {
  const styles = useStyleSheet(themedStyles);
  const isAscending = searchDirection === SORT_DIRECTION.Ascending;
  return (
    <View style={styles.root}>
      <Radio
        checked={isAscending}
        onChange={() => setSearchDirection(SORT_DIRECTION.Ascending)}>
        Top Ranket
      </Radio>
      <Radio
        checked={!isAscending}
        onChange={() => setSearchDirection(SORT_DIRECTION.Descending)}>
        Lowest Ranket
      </Radio>
    </View>
  );
};
