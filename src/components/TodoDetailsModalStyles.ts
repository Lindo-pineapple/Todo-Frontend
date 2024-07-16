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
    backgroundColor: 'black',
    opacity: 0.4,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
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
    fontFamily: 'HurmeGeometricSans1-Bold',
    textAlign: 'center',
    fontSize: 20,
  },
  titleText: {
    fontSize: 32,
    fontFamily: 'HurmeGeometricSans1-Bold',
    color: '#2D2E30',
    textAlign: 'left',
    bottom: 30,
  },
  dateText: {
    fontSize: 18,
    fontFamily: 'HurmeGeometricSans1-Bold',
    color: 'lightgray',
    bottom: 20,
  },
  descriptionText: {
    fontSize: 18,
    fontFamily: 'HurmeGeometricSans1-Bold',
    color: 'lightgray',
    bottom: 20,
  },
});
