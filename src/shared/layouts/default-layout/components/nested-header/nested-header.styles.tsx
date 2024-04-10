import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 56,
  },
  title: {
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginRight: -40,
    textAlign: 'center',
  },
  themeIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  themeIcon: {
    width: 24,
    height: 24,
  },
});
