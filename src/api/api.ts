const baseUrl: string = 'http://localhost:3000';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTodos = async (): Promise<ITodo[]> => {
  const authToken = await AsyncStorage.getItem('token');
  try {
    const todos = await fetch(baseUrl + '/todos/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': authToken!,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Server Returned status code: ${response.status}`);
        }
        return response.json();
      })
      .then(todos => {
        // Process the retrieved user data
        // console.log(todos);
        return todos;
      })
      .catch(error => {
        console.error('Error:', error);
        return false;
      });

    return todos;
  } catch (error) {
    throw new Error('Error: ' + error);
  }
};

export const addTodo = async (title: string, description: string) => {
  const todo: Omit<ITodo, '_id'> = {
    todo: title,
    description: description,
    isDone: false,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': authToken,
    },
    body: JSON.stringify(todo),
  };
  try {
    fetch(baseUrl + '/todos/', options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(newTodo => {
        // Process the newly created user data
        console.log('New Todo:', newTodo);
        return newTodo;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } catch (error) {
    throw new Error('Error: ' + error);
  }
};

export const updateTodo = async (Todo: ITodo) => {
  const {_id, todo, description, isDone} = Todo;

  const updateItem: Omit<ITodo, '_id'> = {
    todo,
    description,
    isDone,
  };
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': authToken,
    },
    body: JSON.stringify(updateItem),
  };
  try {
    fetch(baseUrl + `/todos/update/${_id}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(newTodo => {
        // Process the newly created user data
        console.log('New Todo:', newTodo);
        return newTodo;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } catch (error) {
    throw new Error('Error: ' + error);
  }
};
