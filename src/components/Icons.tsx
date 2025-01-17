import React, { useState } from 'react';
import {GestureResponderEvent, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationModal from './NotificationModal';

const styles = StyleSheet.create({
  menuIcon: {
    width: 30,
    height: 35,
    left: 10,
    top: 10,
  },
  bellIcon: {
    fontWeight: 'bold',
    color: 'black',
    top: 10,
    right: 10,
  },
});

const MenuIcon = require('../../assets/Images/burger_menu.png');

export const DrawerIcon = (props: {
  onPress:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
}) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image style={styles.menuIcon} source={MenuIcon} />
    </TouchableOpacity>
  );
};

export const BellIcon = () => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity>
      <NotificationModal
        modalVisible={visible}
        onModalPress={() => setVisible(!visible)}
      />
      <Icon
        style={styles.bellIcon}
        name={'bell-badge'}
        size={30}
        color={'black'}
        onPress={() => setVisible(!visible)}
      />
    </TouchableOpacity>
  );
};
