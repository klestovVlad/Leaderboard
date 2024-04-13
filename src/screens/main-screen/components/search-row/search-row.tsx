import {Button, useStyleSheet} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {Input} from 'src/shared/ui/input/input';
import {View} from 'react-native';
import {SORT_DIRECTION} from 'src/shared/constants/sort-options';

import {themedStyles} from './search-row.styles';
import {SearchDirectionSelector} from '../search-direction-selector/search-direction-selector';

interface SearchRowProps {
  searchDirection: SORT_DIRECTION;
  setSearchDirection: (value: SORT_DIRECTION) => void;
  setSearch: (value: string) => void;
}

export const SearchRow = ({
  searchDirection,
  setSearchDirection,
  setSearch,
}: SearchRowProps) => {
  const styles = useStyleSheet(themedStyles);
  const [value, setValue] = useState('');

  const onSearch = () => {
    setSearch(value);
  };

  useEffect(() => {
    if (!value) {
      setSearch('');
    }
  }, [setSearch, value]);

  return (
    <View style={styles.root}>
      <View style={styles.searchInputWrapper}>
        <Input value={value} setValue={setValue} placeholder="User name..." />
        <Button disabled={!value} onPress={onSearch}>
          Search
        </Button>
      </View>
      <SearchDirectionSelector
        searchDirection={searchDirection}
        setSearchDirection={setSearchDirection}
      />
    </View>
  );
};
