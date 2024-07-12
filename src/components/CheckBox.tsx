import {CheckBox} from '@rneui/themed';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CheckItem(props: {state: boolean}) {
  const [checked, setState] = React.useState(props.state);
  const toggleCheckbox = () => {
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
