import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

// DUMMY DATA FOR DESIGN PURPOSES
const TODOS: ITodo[] | any = [
  {
    _id: '668d4cf8dd3d76c20f8606be',
    todo: 'Create Todos App',
    description: 'Create a Fullstack React Native Todo App.',
    isDone: false,
    userId: '668d40069e8cecf19b90a19f',
    __v: 0,
  },
  {
    _id: '668e2ed37092951c758c3016',
    todo: 'Todo to be Deleted For delete purposes',
    description:
      'Make sure every single part of the backend works as it should.',
    isDone: false,
    userId: '668d40069e8cecf19b90a19f',
    __v: 0,
  },
  {
    _id: '668fe5d286ac87026d767cc4',
    todo: 'Work on Front-End',
    description:
      'Do the Frontend Design, and make it it look like it is supposed to.',
    isDone: false,
    userId: '668d40069e8cecf19b90a19f',
    __v: 0,
  },
  {
    _id: '668fe5ed86ac87026d767cc6',
    todo: 'Fix Styling and fonts',
    description: 'Fix STyling and fonts',
    isDone: false,
    userId: '668d40069e8cecf19b90a19f',
    __v: 0,
  },
  {
    _id: '668fe63a86ac87026d767cc8',
    todo: 'Implement Auth',
    description: 'Allow Users to Register and Login and use the Application.',
    isDone: false,
    userId: '668d40069e8cecf19b90a19f',
    __v: 0,
  },
  {
    _id: '668fe66786ac87026d767ccb',
    todo: 'Creat Login And Register Page',
    description: 'Create the Login and registration Pages',
    isDone: false,
    userId: '668d40069e8cecf19b90a19f',
    __v: 0,
  },
  {
    _id: '668fe68b86ac87026d767ccd',
    todo: 'Create a landing Page',
    description: 'Create a Landin Page for the application',
    isDone: false,
    userId: '668d40069e8cecf19b90a19f',
    __v: 0,
  },
  {
    _id: '668fe6a686ac87026d767ccf',
    todo: 'Add Loaders',
    description: 'While the application is performing Async Tasks Add Loaders.',
    isDone: false,
    userId: '668d40069e8cecf19b90a19f',
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
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  checkbox: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '10%',
    backgroundColor: 'white',
    color: 'white',
  },
  itemDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontFamily: 'HurmeGeometricSans3-Bold',
    backgroundColor: 'white',
  },
  dateText: {
    alignSelf: 'flex-start',
    fontSize: 12,
    backgroundColor: 'white',
  },
});

const Todo = ({todo, onPress}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <SafeAreaView style={styles.contentContainer}>
      <TouchableOpacity style={styles.checkbox}>
        <Text>{todo.isDone.toString()}</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.itemDetails}>
        <Text style={styles.title}>{todo.todo}</Text>
        <Text style={styles.dateText}>{todo.userId}</Text>
      </SafeAreaView>
    </SafeAreaView>
  </TouchableOpacity>
);

const TodoItem: React.FC<Props> = () => {
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
