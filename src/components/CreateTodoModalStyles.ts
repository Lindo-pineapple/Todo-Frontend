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
    flex: 0.5,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    backgroundColor: 'black',
    opacity: 0.4,
    padding: 20,
    margin: -20,
  },
  contenContainer: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
    margin: -20,
  },
  button: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#0076FE',
    height: '15%',
    marginVertical: 10,
  },
  textStyle: {
    color: 'white',
    fontFamily: 'HurmeGeometricSans3-Bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    fontSize: 30,
    fontFamily: 'HurmeGeometricSans3-Bold',
    color: '#2D2E30',
    marginVertical: 10,
    textAlign: 'left',
  },
  input: {
    borderColor: 'lightgrey',
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    marginVertical: 20,
    color: 'ligthgrey',
    width: '100%',
    fontFamily: 'HurmeGeometricSans3-Bold',
  },
  multiInput: {
    textAlignVertical: 'top',
    height: '45%',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
    bottom: 10,
    color: 'ligthgrey',
    width: '100%',
    fontFamily: 'HurmeGeometricSans3-Bold',
  },
});