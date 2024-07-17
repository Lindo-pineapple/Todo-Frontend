import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from './src/screens/Main/MainScreen';
import {BellIcon, DrawerIcon} from './src/components/Icons';

export default function App(): React.JSX.Element {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#EFF2F7',
            padding: 20,
            margin: 20,
          },
          headerLeft: _props => (
            <DrawerIcon onPress={() => navigation.toggleDrawer()} />
          ),
          headerRight: _props => (
            <BellIcon
              onPress={() => {
                return <></>;
              }}
            />
          ),
          title: '',
        })}>
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen
          name="Article"
          component={() => {
            return <></>;
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
