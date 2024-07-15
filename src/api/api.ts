const baseUrl: string = 'http://localhost:3000';
const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGQ0MDA2OWU4Y2VjZjE5YjkwYTE5ZiIsImlhdCI6MTcyMTA0Mzk3NiwiZXhwIjoxNzIxMDQ1Nzc2fQ.thx1H59b00hni8HlVr0m3Q0qZCjftweCvlA74Sb5Aqw';

export const getTodos = async (): Promise<ITodo[]> => {
  try {
    const todos = await fetch(baseUrl + '/todos/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': authToken,
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
