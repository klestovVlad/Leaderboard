import React from 'react';
import {Icon, Layout, Text, useStyleSheet} from '@ui-kitten/components';
import {View} from 'react-native';

import {themedStyles} from './table-row.styles';

interface TableRowProps {
  name: string;
  rank?: number;
  stars: number;
  numberOfPoints: number;
  isHighlighted?: boolean;
}

export const TableRow = ({
  name,
  rank,
  stars,
  numberOfPoints,
  isHighlighted,
}: TableRowProps) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={styles.root} level={isHighlighted ? '3' : '1'}>
      <View style={styles.nameAndIconWrapper}>
        <Icon style={styles.icon} name="person" fill="#8F9BB3" />
        <View style={styles.nameWrapper}>
          <Text category="s1" numberOfLines={1}>
            {name || 'No name'}
          </Text>
          <Text category="c1" appearance="hint">
            {stars} {stars === 1 ? 'star' : 'stars'}
          </Text>
        </View>
      </View>
      <Text category="s1" style={styles.rank}>
        {rank}
      </Text>
      <Text category="s1" style={styles.points}>
        {numberOfPoints}
      </Text>
    </Layout>
  );
};
