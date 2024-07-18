import {CheckBox, Image} from '@rneui/themed';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {checkedIcon, unCheckedIcon} from '../../components/PasswordCheckBox';
import {LoginUser} from '../../api/userApi';

const img = require('../../../assets/Images/todol_icon.png');
const Login = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(false);

  function handleName(e: string) {
    const nameVar = e;
    setName(nameVar);
    if (nameVar.length >= 2) {
      setName(nameVar);
    }
  }

  function handlePassword(e: string) {
    const passwordVar = e;
    setPassword(passwordVar);
    if (
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
        passwordVar,
      )
    ) {
      setPassword(passwordVar);
    }
  }

  async function handleSubmit() {
    let regUser: any | boolean = await LoginUser(name, password);
    if (regUser !== false) {
      this.PasswordInput.clear();
      setPassword('');
      this.NameInput.clear();
      setName('');
      navigation.navigate('Home');
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.mainContainer}>
        <SafeAreaView style={styles.loginContainer}>
          <Image source={img} style={styles.logo} />
        </SafeAreaView>
        <SafeAreaView style={styles.loginContainer}>
          <Text style={styles.text_header}>Login</Text>
          <SafeAreaView style={styles.action}>
            <FontAwesome
              name="user"
              color={'#0076FE'}
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor={'#b8b8b8'}
              style={styles.textInput}
              onChange={e => handleName(e.nativeEvent.text)}
              ref={input => {
                this.NameInput = input;
              }}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.action}>
            <FontAwesome
              name="lock"
              color={'#0076FE'}
              size={28}
              style={(styles.smallIcon, {top: 5, marginRight: 10})}
            />
            <TextInput
              secureTextEntry={!showPassword}
              placeholder="Password"
              placeholderTextColor={'#b8b8b8'}
              style={styles.textInput}
              onChange={e => handlePassword(e.nativeEvent.text)}
              ref={input => {
                this.PasswordInput = input;
              }}
            />
            <CheckBox
              style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}
              checked={!showPassword}
              checkedIcon={checkedIcon}
              uncheckedIcon={unCheckedIcon}
              checkedColor="#0076FE"
              onPress={() => setshowPassword(!showPassword)}
            />
          </SafeAreaView>
          <TouchableOpacity style={styles.forgotpassword}>
            <Text style={styles.forgotpasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity
            onPress={() => [handleSubmit()]}
            style={styles.inBut}>
            <SafeAreaView>
              <Text style={styles.textSign}>Log In</Text>
            </SafeAreaView>
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity
            onPress={() => [navigation.navigate('Register')]}
            style={styles.inBut}>
            <SafeAreaView>
              <Text style={styles.textSign}>Register</Text>
            </SafeAreaView>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
