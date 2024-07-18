import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

export const checkedIcon: React.ReactElement = (
  <Feather
    style={{
      bottom: 5,
      left: 10,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    }}
    name={'eye'}
    size={23}
    color={'#0076FE'}
  />
);

export const unCheckedIcon: React.ReactElement = (
  <Feather
    style={{
      bottom: 5,
      left: 10,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    }}
    name={'eye-off'}
    size={23}
    color={'#0076FE'}
  />
);
