import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {addTodo, getTodos} from './src/api/api';
import TodoItem from './src/components/TodoItem';
import TodoComponent from './src/components/TodoComponent';
import AddTodo from './src/components/AddTodo';

//BLUE COLOR = #0076FE
//FADE BACK COLOR WHEN MODAL IS UP = #BEC6D1

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#EFF2F7',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#2D2E30',
    marginHorizontal: 10,
  },
  topIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  menuIcon: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    backgroundColor: 'red',
  },
  bellIcon: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    backgroundColor: 'red',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
  },
  plus: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'white',
    backgroundColor: '#0076FE',
    alignSelf: 'flex-end',
  },
});

export default function App(): React.JSX.Element {
  // const [todos, setTodos] = useState<ITodo[]>([]);

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  // const fetchTodos = async (): Promise<void> => {
  //   await getTodos()
  //     .then((todos: ITodo[] | any) => setTodos(todos))
  //     .catch((err: Error) => console.log(err));
  // };

  return (
    <SafeAreaView style={styles.main}>
      <SafeAreaView style={styles.topIcons}>
        {/* Use React Navigation */}
        <Text style={styles.menuIcon}>Icon</Text>
        <Text style={styles.bellIcon}>Icon</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.contentContainer}>
        <Text style={styles.title}>Today</Text>
        <TodoItem />
      </SafeAreaView>
      <SafeAreaView style={styles.bottomContainer}>
        <Text style={styles.plus}>Plus</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
