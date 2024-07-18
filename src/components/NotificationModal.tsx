import React from 'react';
import 'react-native-gesture-handler';
import {Modal, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    display: 'flex',
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
    height: 150,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    elevation: 2,
    backgroundColor: '#0076FE',
  },
  buttonClose: {
    backgroundColor: '#0076FE',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    top: 5,
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const NotificationModal = (props: {
  modalVisible: boolean;
  onModalPress: any;
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onModalPress}>
      <SafeAreaView style={styles.centeredView}>
        <SafeAreaView style={styles.modalView}>
          <Text style={styles.modalText}>No Notifications.</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={props.onModalPress}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
};

export default NotificationModal;
