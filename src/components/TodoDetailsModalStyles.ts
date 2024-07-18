import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center',
    padding: 20,
  },
  NonContenContainer: {
    flex: 0.67,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    backgroundColor: '#94989e',
    opacity: 0.5,
    padding: 20,
    margin: -20,
  },
  contentContainer: {
    flex: 0.33,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
    margin: -20,
  },
  textContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 20,
  },
  timeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
    marginBottom: 20,
  },
  button: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#0076FE',
    top: 20,
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Sofia Pro Semi Bold Az',
    textAlign: 'center',
    fontSize: 25,
  },
  titleText: {
    fontSize: 32,
    fontFamily: 'Sofia Pro Semi Bold Az',
    color: '#2D2E30',
    bottom: 20,
  },
  clockIcon: {
    top: 10,
  },
  dateText: {
    fontSize: 22,
    fontFamily: 'Sofia Pro Medium Az',
    color: '#bfbfbf',
    top: 8,
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: 'Sofia Pro Medium Az',
    color: '#bfbfbf',
    bottom: 20,
  },
});
