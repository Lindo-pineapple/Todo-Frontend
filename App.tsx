import React, {useState} from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import TodoItem from './src/components/TodoItem';
import CreateTodoModal from './src/components/CreateTodoModal';
import {Image} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    backgroundColor: '#CCD9E5',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    backgroundColor: '#EFF2F7',
  },
  title: {
    fontSize: 64,
    fontFamily: 'HurmeGeometricSans1-Bold',
    color: '#2D2E30',
    marginHorizontal: 20,
  },
  topIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EFF2F7',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    padding: 20,
  },
  menuIcon: {
    width: 35,
    height: 40,
    left: 5,
  },
  bellIcon: {
    fontWeight: 'bold',
    color: 'black',
    // top: 10,
  },
  footer: {
    justifyContent: 'flex-end',
    backgroundColor: '#CCD9E5',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    backgroundColor: '#EFF2F7',
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  plusBackground: {
    alignSelf: 'flex-end',
    width: 100,
    height: 100,
    top: 4,
    right: 0.8,
    borderBottomRightRadius: 70,
  },
  plusText: {
    alignSelf: 'flex-end',
  },
});

export default function App(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const AddIcon = require('./assets/Images/add_icon.png');
  const MenuIcon = require('./assets/Images/burger_menu.png');
  return (
    <>
      <SafeAreaView style={styles.main}>
        <SafeAreaView style={styles.topIcons}>
          {/* Use React Navigation */}
          <Image style={styles.menuIcon} source={MenuIcon} />
          <Icon
            style={styles.bellIcon}
            name={'bell-badge'}
            size={37}
            color={'black'}
          />
        </SafeAreaView>
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
