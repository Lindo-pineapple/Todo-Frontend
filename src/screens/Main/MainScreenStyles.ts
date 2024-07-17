import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: '#EFF2F7',
  },
  title: {
    fontSize: 64,
    fontFamily: 'Sofia Pro Semi Bold Az',
    color: '#2D2E30',
    marginHorizontal: 20,
  },
  footer: {
    justifyContent: 'flex-end',
    backgroundColor: '#CCD9E5',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    backgroundColor: '#EFF2F7',
  },
  plusBackground: {
    alignSelf: 'flex-end',
    width: 100,
    height: 100,
    top: 4,
    right: 0.8,
  },
  plusText: {
    alignSelf: 'flex-end',
  },
});
