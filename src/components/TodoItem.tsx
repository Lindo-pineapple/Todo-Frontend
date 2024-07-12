import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckItem from './CheckBox';

// DUMMY DATA FOR DESIGN PURPOSES
const TODOS: ITodo[] | any = [
  {
    _id: '668d4cf8dd3d76c20f8606be',
    todo: 'Snap texture photos',
    description: 'Create a Fullstack React Native Todo App.',
    isDone: true,
    userId: '668d40069e8cecf19b90a19f',
    createdAt: '10:30 AM',
    __v: 0,
  },
  {
    _id: '668e2ed37092951c758c3016',
    todo: 'Doodle a sunset',
    description:
      'Make sure every single part of the backend works as it should.',
    isDone: false,
    userId: '668d40069e8cecf19b90a19f',
    createdAt: '06:45 PM',
    __v: 0,
  },
  {
    _id: '668fe5d286ac87026d767cc4',
    todo: 'Call family',
    description:
      'Do the Frontend Design, and make it it look like it is supposed to.',
    isDone: false,
    userId: '668d40069e8cecf19b90a19f',
    createdAt: '11:25 PM',
    __v: 0,
  },
];

type ItemProps = {
  todo: ITodo;
  onPress: () => void;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
  },
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
    marginBottom: 10,
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
        <CheckItem state={todo.isDone} />
      </TouchableOpacity>
      <SafeAreaView style={styles.itemDetails}>
        <Text style={styles.title}>{todo.todo}</Text>
        <Text style={styles.dateText}>{todo.createdAt}</Text>
      </SafeAreaView>
    </SafeAreaView>
  </TouchableOpacity>
);

const TodoItem: React.FC = () => {
  const renderItem = ({item}: {item: ITodo}) => {
    return <Todo todo={item} onPress={() => {}} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TODOS}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};

export default TodoItem;
