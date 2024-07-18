import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  Modal,
  Text,
  Pressable,
  SafeAreaView,
  NativeSyntheticEvent,
  TextInput,
} from 'react-native';
import styles from './CreateTodoModalStyles';
import {addTodo} from '../api/api';

const CreateTodoModal = (props: {
  modalVisible: boolean;
  onModalPress: ((event: NativeSyntheticEvent<any>) => void) | undefined;
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const createTodo = async (): Promise<void> => {
    await addTodo(title, description);
    this.titleInput.clear();
    setTitle('');
    this.descriptionInput.clear();
    setDescription('');
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onModalPress}>
      <SafeAreaView style={styles.modalView}>
        <Pressable
          style={styles.NonContenContainer}
          onPress={props.onModalPress}
        />
        <SafeAreaView style={styles.contenContainer}>
          <Text style={styles.modalText}>Create Todo</Text>
          <TextInput
            style={styles.input}
            placeholder="Task name"
            placeholderTextColor={'#b3b3b3'}
            onChangeText={newText => setTitle(newText)}
            defaultValue={title}
            ref={input => {
              this.titleInput = input;
            }}
          />
          <TextInput
            style={styles.multiInput}
            multiline
            placeholder="Add description"
            placeholderTextColor={'#b3b3b3'}
            onChangeText={newText => setDescription(newText)}
            defaultValue={description}
            ref={input => {
              this.descriptionInput = input;
            }}
          />
          <Pressable
            style={styles.button}
            onPress={() => {
              createTodo();
            }}>
            <Text style={styles.textStyle}>Create</Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
};

export default CreateTodoModal;
