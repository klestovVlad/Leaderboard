import React, {ReactNode} from 'react';
import {View, ViewProps} from 'react-native';
import {Text} from '@ui-kitten/components';

import {styles} from './default-screen-header.styles';

type Props = {
  title: string;
  rightElement?: ReactNode;
} & ViewProps;

export function DefaultScreenHeader({title, rightElement, style}: Props) {
  return (
    <View style={[styles.root, style]}>
      <Text style={styles.title}>{title}</Text>

      <View>{rightElement && rightElement}</View>
    </View>
  );
}
