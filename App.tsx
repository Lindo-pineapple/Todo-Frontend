import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerNav from './src/screens/Navigation/DrawerNavigation';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/screens/Login&Register/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/screens/Login&Register/RegisterScreen';
import {healthCheck} from './src/api/api';

export default function App(): React.JSX.Element {
  const health = async () => {
    const healthStatus = await healthCheck()
      .then(resp => {
        return resp;
      })
      .catch((err: Error) => console.log(err));
    console.log(healthStatus);
  };

  useEffect(() => {
    setTimeout(() => {
      health();
      SplashScreen.hide();
    }, 500);
  });
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          statusBarColor: 'black',
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="App" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
