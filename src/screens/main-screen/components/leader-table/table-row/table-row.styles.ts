import {StyleSheet} from 'react-native';

export const themedStyles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    overflow: 'hidden',
    paddingVertical: 8,
    alignItems: 'center',
  },
  rootHighlighted: {
    backgroundColor: 'color-info-100',
  },
  icon: {
    marginRight: 8,
    width: 24,
    height: 24,
  },
  nameAndIconWrapper: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  nameWrapper: {
    flex: 1,
  },
  rank: {
    width: '20%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  points: {
    width: '30%',
    textAlign: 'right',
    justifyContent: 'center',
  },
});
