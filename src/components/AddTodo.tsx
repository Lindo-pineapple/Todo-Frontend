import {CheckBox, Image} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  buttonStyles: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    height: 60,
    margin: 10,
    bottom: 10,
  },
});

const AddTodoIcon = require('../../assets/Images/addITodo.png');

const AddTodo = (props: {state: boolean}) => {
  const [checked, setState] = React.useState(props.state);
  const toggleCheckbox = () => {
    setState(!checked);
  };

  const checkedIcon: React.ReactElement = (
    <SafeAreaView style={styles.buttonStyles}>
      <TouchableOpacity>
        <Image source={AddTodoIcon} alt="" />
      </TouchableOpacity>
    </SafeAreaView>
  );

  const unCheckedIcon: React.ReactElement = (
    <SafeAreaView style={styles.buttonStyles}>
      <TouchableOpacity>
        <Image source={AddTodoIcon} alt="" />
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <CheckBox
      checked={checked}
      checkedIcon={checkedIcon}
      uncheckedIcon={unCheckedIcon}
      checkedColor="#0076FE"
      onPress={toggleCheckbox}
    />
  );
};

export default AddTodo;
