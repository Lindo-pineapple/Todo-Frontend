import {CheckBox, Image} from '@rneui/themed';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {checkedIcon, unCheckedIcon} from '../../components/PasswordCheckBox';
import {RegisterUser} from '../../api/userApi';
import {useNavigation} from '@react-navigation/native';

const img = require('../../../assets/Images/todo_splash.png');

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);

  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  function handleName(e: string) {
    const nameVar = e;
    setName(nameVar);
    setNameVerify(false);
    if (nameVar.length >= 2) {
      setNameVerify(true);
    }
  }

  async function handleSubmit() {
    let regUser: any | boolean = await RegisterUser(name, password, email);
    if (regUser !== false) {
      navigation.navigate("Login");
      this.PasswordInput.clear();
      setPassword('');
      this.NameInput.clear();
      setName('');
      this.EmailInput.clear();
      setEmail('');
    }
  }

  function handleEmail(e: string) {
    const emailVar = e;
    setEmail(emailVar);
    setEmailVerify(false);
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
  }

  function handlePassword(e: string) {
    const passwordVar = e;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
        passwordVar,
      )
    ) {
      setPassword(passwordVar);
      setPasswordVerify(true);
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
          <Text style={styles.text_header}>Register</Text>
          <SafeAreaView style={styles.action}>
            <FontAwesome
              name="envelope"
              color={'#0076FE'}
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#b8b8b8'}
              style={styles.textInput}
              onChange={e => handleEmail(e.nativeEvent.text)}
              ref={input => {
                this.EmailInputInput = input;
              }}
            />
            {email.length < 1 ? null : emailVerify ? (
              <Feather name="check-circle" color={'green'} size={20} />
            ) : (
              <MaterialIcons name="error" color={'red'} size={20} />
            )}
          </SafeAreaView>
          {email.length < 1 ? null : emailVerify ? null : (
            <Text style={styles.textVerification}>
              Please Enter a valid Email.
            </Text>
          )}
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
            {name.length < 1 ? null : nameVerify ? (
              <Feather name="check-circle" color={'green'} size={20} />
            ) : (
              <MaterialIcons name="error" color={'red'} size={20} />
            )}
          </SafeAreaView>
          {name.length < 1 ? null : nameVerify ? null : (
            <Text style={styles.textVerification}>
              Username should be 2 or more characters.
            </Text>
          )}
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
          {password.length < 1 ? null : passwordVerify ? null : (
            <Text style={styles.textVerification}>
              Required: upper; required: lower; required: digit;
              max-consecutive: 2; minlength:
            </Text>
          )}
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity
            onPress={() => [handleSubmit()]}
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

export default Register;
