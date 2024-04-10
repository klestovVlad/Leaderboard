import React from 'react';
import {Text, useStyleSheet} from '@ui-kitten/components';
import {View} from 'react-native';

import {themedStyles} from './table-header.styles';

export const TableHeader = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.root}>
      <View style={styles.nameWrapper}>
        <Text category="s1" appearance="hint">
          Name
        </Text>
      </View>
      <View style={styles.rank}>
        <Text category="s1" appearance="hint">
          Rank
        </Text>
      </View>
      <View style={styles.points}>
        <Text style={styles.pointsText} category="s1" appearance="hint">
          Points
        </Text>
      </View>
    </View>
  );
};
