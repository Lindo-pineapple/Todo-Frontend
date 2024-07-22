import React, {useCallback, useEffect, useState} from 'react';
import {ImageBackground, Pressable, SafeAreaView, Text} from 'react-native';
import TodoItem from '../../components/TodoItem';
import CreateTodoModal from '../../components/CreateTodoModal';
import 'react-native-gesture-handler';
import styles from './MainScreenStyles';
import {getTodos} from '../../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainScreen(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const AddIcon = require('../../../assets/Images/add_icon.png');
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState(undefined), []);

  useEffect(() => {
    fetchTodos();
    forceUpdate;
  }, [forceUpdate, modalVisible]);

  const fetchTodos = async (): Promise<void> => {
    await getTodos()
      .then(async (todos: ITodo[] | any) => {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      })
      .catch((err: Error) => console.log(err));
  };

  return (
    <>
      <SafeAreaView style={styles.main}>
        <SafeAreaView style={styles.contentContainer}>
          <Text style={styles.title}>Today</Text>
          <TodoItem />
        </SafeAreaView>
        <CreateTodoModal
          modalVisible={modalVisible}
          onModalPress={() => {
            setModalVisible(!modalVisible);
            forceUpdate;
          }}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.footer}>
        <SafeAreaView style={styles.bottomContainer}>
          <Pressable
            onPress={() => {
              setModalVisible(true);
            }}>
            <ImageBackground style={styles.plusBackground} source={AddIcon} />
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
}
