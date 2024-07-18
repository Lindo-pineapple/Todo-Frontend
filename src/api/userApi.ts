import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl: string = 'http://localhost:3000';

export const RegisterUser = async (
  username: string,
  password: string,
  email: string,
) => {
  const user = {
    email,
    username,
    password,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  try {
    fetch(baseUrl + '/users/register', options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(async result => {
        // Process the newly created user data
        console.log('Token:', result.token);
        await AsyncStorage.setItem('token', result.token);
        return result.token;
      })
      .catch(error => {
        console.error('Error:', error);
        return false;
      });
  } catch (error) {
    throw new Error('Error: ' + error);
  }
};

export const LoginUser = async (username: string, password: string) => {
  const user = {
    username,
    password,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  try {
    fetch(baseUrl + '/users/login', options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(async result => {
        console.log('Result: ', result);
        console.log('Token: ', result.token);
        await AsyncStorage.setItem('token', result.token);
        await AsyncStorage.setItem(
          'user',
          JSON.stringify({
            name: result.response.username,
            email: result.response.email,
          }),
        );
        return result.token;
      })
      .catch(error => {
        console.error('Error:', error);
        return false;
      });
  } catch (error) {
    throw new Error('Error: ' + error);
  }
};
