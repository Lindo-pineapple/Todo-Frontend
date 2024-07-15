import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import TodoItem from './src/components/TodoItem';
import CreateTodoModal from './src/components/CreateTodoModal';
import CustomIcon from './assets/CustomIcon';

//BLUE COLOR = #0076FE
//FADE BACK COLOR WHEN MODAL IS UP = #BEC6D1

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#EFF2F7',
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
    fontFamily: 'HurmeGeometricSans3-Bold',
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
    alignSelf: 'flex-end',
  },
});

export default function App(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
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
      <CreateTodoModal
        modalVisible={modalVisible}
        onModalPress={() => setModalVisible(!modalVisible)}
      />
      <SafeAreaView style={styles.bottomContainer}>
        <Pressable onPress={() => setModalVisible(true)}>
          <CustomIcon
            style={styles.plus}
            name="leafIcon-no-bg"
            size={99}
            color="#0076FE"
          />
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
}
