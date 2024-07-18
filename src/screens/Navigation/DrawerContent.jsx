import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './DrawerContentStyles';

const DrawerList = [
  {icon: 'home-outline', label: 'Home', navigateTo: 'Home'},
  {icon: 'account-multiple', label: 'Profile', navigateTo: 'Profile'},
  {icon: 'application-cog', label: 'Settings', navigateTo: ''},
];

const DrawerLayout = ({icon, label, navigateTo}) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({color, size}) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = () => {
  return DrawerList.map((el, i) => {
    return (
      <TouchableOpacity>
        <DrawerLayout
          key={i}
          icon={el.icon}
          label={el.label}
          navigateTo={el.navigateTo}
        />
      </TouchableOpacity>
    );
  });
};

const DrawerContent = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <SafeAreaView style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <SafeAreaView style={styles.userInfoSection}>
              <SafeAreaView style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image source={{}} size={50} style={{marginTop: 5}} />
                <SafeAreaView style={{marginLeft: 10, flexDirection: 'column'}}>
                  <Title style={styles.title}>Lindo</Title>
                  <Text style={styles.caption} numberOfLines={1}>
                    lindo@email.com
                  </Text>
                </SafeAreaView>
              </SafeAreaView>
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerSection}>
            <DrawerItems />
          </TouchableOpacity>
        </SafeAreaView>
      </DrawerContentScrollView>
      <SafeAreaView style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default DrawerContent;
