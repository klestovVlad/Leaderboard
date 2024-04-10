import {useStyleSheet} from '@ui-kitten/components';
import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {NestedHeader} from 'src/shared/layouts/default-layout/components/nested-header/nested-header';
import themedStyles from 'src/shared/layouts/default-layout/default-layout.styles';

export const DefaultLayout: FC<PropsWithChildren> & {
  NestedHeader: typeof NestedHeader;
} = ({children}) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.root}>
      <View style={styles.root}>{children}</View>
    </View>
  );
};

DefaultLayout.NestedHeader = NestedHeader;
