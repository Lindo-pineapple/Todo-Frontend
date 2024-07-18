import React, {useState} from 'react';
import {ImageBackground, Pressable, SafeAreaView, Text} from 'react-native';
import TodoItem from '../../components/TodoItem';
import CreateTodoModal from '../../components/CreateTodoModal';
import 'react-native-gesture-handler';
import styles from './MainScreenStyles';

export default function MainScreen(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const AddIcon = require('../../../assets/Images/add_icon.png');

  return (
    <>
      <SafeAreaView style={styles.main}>
        <SafeAreaView style={styles.contentContainer}>
          <Text style={styles.title}>Today</Text>
          <TodoItem />
        </SafeAreaView>
        <CreateTodoModal
          modalVisible={modalVisible}
          onModalPress={() => setModalVisible(!modalVisible)}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.footer}>
        <SafeAreaView style={styles.bottomContainer}>
          <Pressable onPress={() => setModalVisible(true)}>
            <ImageBackground style={styles.plusBackground} source={AddIcon} />
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
}
