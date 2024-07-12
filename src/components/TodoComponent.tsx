import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    margin: 20,
  },
  checkBox: {
    backgroundColor: 'white',
    width: '15%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
    height: 40,
  },
  title: {
    backgroundColor: 'yellow',
  },
  time: {
    backgroundColor: 'gold',
  },
});

const TodoItem: React.FC<Props> = ({todo}) => {
  return (
    <SafeAreaView style={styles.main}>
      {/* <Text>{todo.todo}</Text>
      <Text>{todo.description}</Text>
      <Text>Is Done: {todo.isDone.toString()}</Text>
      <Text>By user: {todo.userId}</Text> */}
      <SafeAreaView style={styles.checkBox}>
        <Text>Is Done: {todo.isDone.toString()}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.details}>
        <SafeAreaView style={styles.title}>
          <Text>{todo.todo}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.time}>
          <Text>{todo.description}</Text>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default TodoItem;
