import React from 'react';
import {TouchableOpacity, SafeAreaView, Text, StyleSheet} from 'react-native';
import CheckItem from './CheckBox';
import FormatDateTime from '../helpers/TimeFormat';

type ItemProps = {
  todo: ITodo;
  onPress: () => void;
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    marginHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
  checkbox: {
    display: 'flex',
    marginHorizontal: -10,
    bottom: 3,
  },
  itemDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 10,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontFamily: 'HurmeGeometricSans3-Bold',
  },
  dateText: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontFamily: 'HurmeGeometricSans3-Bold',
    color: 'lightgray',
    marginVertical: 5,
  },
});

const Todo = ({todo, onPress}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <SafeAreaView style={styles.contentContainer}>
      <TouchableOpacity style={styles.checkbox}>
        <CheckItem state={todo.isDone} Todo={todo} />
      </TouchableOpacity>
      <SafeAreaView style={styles.itemDetails}>
        <Text style={styles.title}>{todo.todo}</Text>
        <Text style={styles.dateText}>{FormatDateTime(todo.updatedAt)}</Text>
      </SafeAreaView>
    </SafeAreaView>
  </TouchableOpacity>
);

export default Todo;
