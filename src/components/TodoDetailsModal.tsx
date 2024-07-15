import React from 'react';
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

const TodoDetailsModal = (props: {
  modalVisible: boolean;
  onModalPress: ((event: NativeSyntheticEvent<any>) => void) | undefined;
  Todo: ITodo;
}) => {
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
            <Text style={styles.dateText}>
              <Icon
                name={'clock-time-four-outline'}
                size={20}
                color={'lightgray'}
              />{' '}
              {FormatDateTime(props.Todo.updatedAt!)}
            </Text>
          </SafeAreaView>
          <Text style={styles.descriptionText}>{props.Todo.description}</Text>
          <Pressable style={styles.button} onPress={props.onModalPress}>
            <Text style={styles.textStyle}>
              {props.Todo.isDone ? 'Mark Incomplete' : 'Mark completed'}
            </Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
};

export default TodoDetailsModal;
