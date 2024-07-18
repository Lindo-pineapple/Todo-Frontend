import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerNav from './src/screens/Navigation/DrawerNavigation';
import SplashScreen from 'react-native-splash-screen';

export default function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  });
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
