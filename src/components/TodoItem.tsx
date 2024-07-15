import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, SafeAreaView} from 'react-native';
import {getTodos} from '../api/api';
import Todo from './Todo';
import TodoDetailsModal from './TodoDetailsModal';

//DUMMY DATA FOR DESIGN PURPOSES
// const TODOS: ITodo[] | any = [
//   {
//     _id: '668d4cf8dd3d76c20f8606be',
//     todo: 'Snap texture photos',
//     description: 'Create a Fullstack React Native Todo App.',
//     isDone: true,
//     userId: '668d40069e8cecf19b90a19f',
//     createdAt: '10:30 AM',
//     __v: 0,
//   },
//   {
//     _id: '668e2ed37092951c758c3016',
//     todo: 'Doodle a sunset',
//     description:
//       'Make sure every single part of the backend works as it should.',
//     isDone: false,
//     userId: '668d40069e8cecf19b90a19f',
//     createdAt: '06:45 PM',
//     __v: 0,
//   },
//   {
//     _id: '668fe5d286ac87026d767cc4',
//     todo: 'Call family',
//     description:
//       'Do the Frontend Design, and make it it look like it is supposed to.',
//     isDone: false,
//     userId: '668d40069e8cecf19b90a19f',
//     createdAt: '11:25 PM',
//     __v: 0,
//   },
// ];

const TodoItem: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState<ITodo | undefined>(undefined);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async (): Promise<void> => {
    await getTodos()
      .then((todos: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err));
  };

  const renderItem = (props: {item: ITodo}) => {
    return (
      <Todo
        todo={props.item}
        key={props.item._id}
        onPress={() => {
          setModalVisible(true);
          setCurrentItem(props.item);
        }}
      />
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 20,
        padding: 10,
      }}>
      {currentItem !== undefined && (
        <TodoDetailsModal
          modalVisible={modalVisible}
          onModalPress={() => setModalVisible(!modalVisible)}
          Todo={currentItem!}
        />
      )}
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};

export default TodoItem;
