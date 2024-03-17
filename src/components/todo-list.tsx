import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { TodoItem } from './todo-item';
import { filteredTodos } from '../recoil/selectors';

export const TodoList: FC = () => {
  const todos = useRecoilValue(filteredTodos);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem item={todo} key={todo.id} />
      ))}
    </>
  );
};
