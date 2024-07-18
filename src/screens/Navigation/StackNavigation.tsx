import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerIcon, BellIcon} from '../../components/Icons';
import MainScreen from '../Main/MainScreen';

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShadowVisible: false,
        statusBarHidden: true,
        headerStyle: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#EFF2F7',
        },
        headerLeft: _props => (
          <DrawerIcon onPress={() => navigation.toggleDrawer()} />
        ),
        headerRight: _props => <BellIcon />,
        title: '',
      })}>
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
