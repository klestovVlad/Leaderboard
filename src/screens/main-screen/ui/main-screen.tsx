import {useStyleSheet} from '@ui-kitten/components';
import React from 'react';
import {DefaultLayout} from 'src/shared/layouts/default-layout/default-layout';
import {View} from 'react-native';

import {themedStyles} from './main-screen.styles';
import {Leaderboard} from '../components/leaderboard/leaderboard';

export const MainScreen = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <DefaultLayout>
      <DefaultLayout.NestedHeader title="Leaderboard" />
      <View style={styles.root}>
        <Leaderboard />
      </View>
    </DefaultLayout>
  );
};
