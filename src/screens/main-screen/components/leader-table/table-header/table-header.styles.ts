import {StyleSheet} from 'react-native';

export const themedStyles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
  },

  nameWrapper: {
    paddingLeft: 32,
    width: '50%',
  },
  rank: {
    width: '20%',
  },
  points: {
    width: '30%',
  },
  pointsText: {
    textAlign: 'right',
  },
});
