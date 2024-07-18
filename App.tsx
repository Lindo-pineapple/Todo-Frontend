import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerNav from './src/screens/Drawer/DrawerNavigation';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
