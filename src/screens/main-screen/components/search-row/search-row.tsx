import {Button, useStyleSheet} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {Input} from 'src/shared/ui/input/input';
import {View} from 'react-native';

import {themedStyles} from './search-row.styles';

interface SearchRowProps {
  setSearch: (value: string) => void;
}

export const SearchRow = ({setSearch}: SearchRowProps) => {
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
      <Input value={value} setValue={setValue} placeholder="User name..." />
      <Button disabled={!value} onPress={onSearch}>
        Search
      </Button>
    </View>
  );
};
