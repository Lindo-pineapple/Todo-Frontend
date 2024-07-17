import React, {useState} from 'react';
import {
  Modal,
  Text,
  Pressable,
  SafeAreaView,
  NativeSyntheticEvent,
} from 'react-native';
import styles from './TodoDetailsModalStyles';
import FormatDateTime from '../helpers/TimeFormat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {updateTodo} from '../api/api';

const TodoDetailsModal = (props: {
  modalVisible: boolean;
  onModalPress: ((event: NativeSyntheticEvent<any>) => void) | undefined;
  Todo: ITodo;
}) => {
  const [done, setDone] = useState(props.Todo.isDone);
  const update = async (): Promise<void> => {
    let todo: ITodo = {
      _id: props.Todo._id,
      todo: props.Todo.todo,
      description: props.Todo.description,
      isDone: !done,
    };
    await updateTodo(todo);
    setDone(!done);
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
        <SafeAreaView style={styles.contentContainer}>
          <SafeAreaView style={styles.textContainer}>
            <Text style={styles.titleText}>{props.Todo.todo}</Text>
            <SafeAreaView style={styles.timeTextContainer}>
              <Icon
                name={'clock-time-four-outline'}
                size={27}
                color={'#bfbfbf'}
                style={styles.clockIcon}
              />
              <Text style={styles.dateText}>
                {' '}
                {FormatDateTime(props.Todo.updatedAt!)}
              </Text>
            </SafeAreaView>
          </SafeAreaView>
          <Text style={styles.descriptionText}>{props.Todo.description}</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              update();
            }}>
            <Text style={styles.textStyle}>
              {done ? 'Mark Incomplete' : 'Mark completed'}
            </Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
};

export default TodoDetailsModal;
