import React from 'react';
import {
  Modal,
  Text,
  Pressable,
  SafeAreaView,
  NativeSyntheticEvent,
  TextInput,
} from 'react-native';
import styles from './CreateTodoModalStyles';

const CreateTodoModal = (props: {
  modalVisible: boolean;
  onModalPress: ((event: NativeSyntheticEvent<any>) => void) | undefined;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onModalPress}>
      <SafeAreaView style={styles.modalView}>
        <SafeAreaView style={styles.contenContainer}>
          <Text style={styles.modalText}>Create Todo</Text>
          <TextInput style={styles.input} placeholder="Task name" />
          <TextInput
            style={styles.multiInput}
            multiline
            placeholder="Add description"
          />
          <Pressable style={styles.button} onPress={props.onModalPress}>
            <Text style={styles.textStyle}>Create</Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
};

export default CreateTodoModal;
