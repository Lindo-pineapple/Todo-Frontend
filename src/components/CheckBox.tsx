import {CheckBox} from '@rneui/themed';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {updateTodo} from '../api/api';

export default function CheckItem(props: {state: boolean; Todo: ITodo}) {
  const [checked, setState] = React.useState(props.state);
  const toggleCheckbox = async () => {
    let todo: ITodo = {
      _id: props.Todo._id,
      todo: props.Todo.todo,
      description: props.Todo.description,
      isDone: !checked,
    };
    await updateTodo(todo);
    setState(!checked);
  };

  const checkedIcon: React.ReactElement = (
    <Icon
      name={'checkbox-multiple-marked-circle'}
      size={35}
      color={'#0076FE'}
    />
  );

  const unCheckedIcon: React.ReactElement = (
    <Icon
      name={'checkbox-multiple-blank-circle-outline'}
      size={35}
      color={'#0076FE'}
    />
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
}
