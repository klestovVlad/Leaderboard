import {Icon, Text} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {TouchableOpacity, View, ViewProps} from 'react-native';
import {
  THEMES,
  ThemeContext,
} from 'src/app/providers/theme-provider/theme-provider';

import {styles} from './nested-header.styles';

type Props = {
  title?: string;
} & ViewProps;

export function NestedHeader({title, ...props}: Props) {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <View {...props} style={styles.root}>
      <Text category="s2" style={styles.title}>
        {title}
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <View style={styles.themeIconWrapper}>
          {theme === THEMES.LIGHT ? (
            <Icon style={styles.themeIcon} fill="#000" name="moon" />
          ) : (
            <Icon style={styles.themeIcon} fill="#fff" name="sun" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
