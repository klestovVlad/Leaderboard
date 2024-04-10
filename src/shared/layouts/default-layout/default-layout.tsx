import {useStyleSheet} from '@ui-kitten/components';
import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DEFAULT_LAYOUT_PADDINGS} from 'src/shared/constants/size';
import {NestedHeader} from 'src/shared/layouts/default-layout/components/nested-header/nested-header';
import themedStyles from 'src/shared/layouts/default-layout/default-layout.styles';

export const DefaultLayout: FC<PropsWithChildren> & {
  NestedHeader: typeof NestedHeader;
} = ({children}) => {
  const styles = useStyleSheet(themedStyles);
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.root,
        {
          paddingTop: (insets.top || 0) + DEFAULT_LAYOUT_PADDINGS.paddingTop,
          paddingBottom: insets.bottom || DEFAULT_LAYOUT_PADDINGS.paddingBottom,
        },
      ]}>
      {children}
    </View>
  );
};

DefaultLayout.NestedHeader = NestedHeader;
