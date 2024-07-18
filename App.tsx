import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerNav from './src/screens/Navigation/DrawerNavigation';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/screens/Login&Register/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/screens/Login&Register/RegisterScreen';

export default function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  });
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   <DrawerNav />
    // </NavigationContainer>
    // <Login />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTransparent: true,
          headerShown: false,
          headerShadowVisible: false,
          statusBarColor: 'black',
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
