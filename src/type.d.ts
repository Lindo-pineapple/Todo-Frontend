interface ITodo {
  _id: string;
  todo: string;
  description: string;
  isDone: boolean;
  userId: string;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: ITodo;
}

type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
